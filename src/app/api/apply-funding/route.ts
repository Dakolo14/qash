import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.companyName || !data.fundingAmount || !data.fundingPurpose) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content for admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4b0d18; border-bottom: 2px solid #4b0d18; padding-bottom: 10px;">New Funding Application</h2>
        
        <div style="margin: 20px 0; background: #f5f5f5; padding: 15px; border-radius: 8px;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>Company:</strong> ${data.companyName}</p>
        </div>

        <div style="margin: 20px 0; background: #f9f9f9; padding: 15px; border-left: 3px solid #4b0d18; border-radius: 4px;">
          <p><strong>Business Type:</strong> ${data.businessType || 'Not specified'}</p>
          <p><strong>Trading Period:</strong> ${data.tradingPeriod || 'Not specified'}</p>
          <p><strong>Average Monthly Revenue:</strong> ${data.monthlyRevenue || 'Not specified'}</p>
          <p><strong>Funding Amount Requested:</strong> ${data.fundingAmount}</p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #4b0d18;">Funding Purpose</h3>
          <p style="background: #f9f9f9; padding: 12px; border-left: 3px solid #4b0d18; border-radius: 4px;">
            ${data.fundingPurpose.replace(/\n/g, '<br />')}
          </p>
        </div>

        ${data.additionalInfo ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #4b0d18;">Additional Information</h3>
          <p style="background: #f9f9f9; padding: 12px; border-left: 3px solid #4b0d18; border-radius: 4px;">
            ${data.additionalInfo.replace(/\n/g, '<br />')}
          </p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
          <p>This is an automated message from the Qash Capital funding application form.</p>
        </div>
      </div>
    `;

    // Format confirmation email for user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4b0d18;">Application Received!</h2>
        
        <p>Hi ${data.name},</p>
        
        <p>Thank you for submitting your funding application to Qash Capital. We've received your submission and we're reviewing it carefully.</p>

        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #4b0d18; margin-top: 0;">What's Next?</h3>
          <p>Our team will analyze your application and contact you within <strong>48 hours</strong> at <strong>${data.phone}</strong> or <strong>${data.email}</strong> to discuss your funding options and next steps.</p>
          <p>In the meantime, if you have any questions, feel free to reach out.</p>
        </div>

        <p>If you haven't already, consider scheduling a strategy session to dive deeper into your business structure and growth plan:</p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="https://qashcapital.com/advisory" style="display: inline-block; background: #4b0d18; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: bold;">Book a Strategy Session</a>
        </div>

        <p style="margin-top: 30px; color: #666; font-size: 14px;">
          Best regards,<br />
          <strong style="color: #4b0d18;">Qash Capital</strong><br />
          <a href="mailto:info@qashcapital.com">info@qashcapital.com</a> | <a href="https://wa.me/2348070454584">WhatsApp: +234 807 045 4584</a>
        </p>
      </div>
    `;

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'applications@qashcapital.com',
      to: 'info@qashcapital.com',
      subject: `New Funding Application from ${data.name} - ₦${data.fundingAmount}`,
      html: adminEmailHtml,
      replyTo: data.email,
    });

    if (adminEmail.error) {
      console.error('Failed to send admin email:', adminEmail.error);
      return NextResponse.json(
        { error: 'Failed to process application' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const userEmail = await resend.emails.send({
      from: 'applications@qashcapital.com',
      to: data.email,
      subject: 'We Received Your Funding Application',
      html: userEmailHtml,
    });

    if (userEmail.error) {
      console.error('Failed to send user confirmation email:', userEmail.error);
      // Don't fail the request if user email fails, admin email was sent
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application received. We will contact you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing funding application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}
