import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.businessDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content for admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4b0d18; border-bottom: 2px solid #4b0d18; padding-bottom: 10px;">New Advisory Booking Request</h2>
        
        <div style="margin: 20px 0; background: #f5f5f5; padding: 15px; border-radius: 8px;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>Company:</strong> ${data.companyName || 'Not provided'}</p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #4b0d18;">Business Description</h3>
          <p style="background: #f9f9f9; padding: 12px; border-left: 3px solid #4b0d18; border-radius: 4px;">
            ${data.businessDescription.replace(/\n/g, '<br />')}
          </p>
        </div>

        <div style="margin: 20px 0;">
          <p><strong>Preferred Date:</strong> ${data.preferredDate || 'Not specified'}</p>
          <p><strong>Preferred Time:</strong> ${data.preferredTime || 'Not specified'}</p>
        </div>

        ${data.message ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #4b0d18;">Additional Message</h3>
          <p style="background: #f9f9f9; padding: 12px; border-left: 3px solid #4b0d18; border-radius: 4px;">
            ${data.message.replace(/\n/g, '<br />')}
          </p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
          <p>This is an automated message from the Qash Capital booking form.</p>
        </div>
      </div>
    `;

    // Format confirmation email for user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4b0d18;">Booking Request Received!</h2>
        
        <p>Hi ${data.name},</p>
        
        <p>Thank you for requesting an advisory session with Qash Capital. We've received your booking request and we're excited to help you move your business forward.</p>

        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #4b0d18; margin-top: 0;">What's Next?</h3>
          <p>Our team will review your details and reach out to you within 24 hours at <strong>${data.phone}</strong> or <strong>${data.email}</strong> to confirm your preferred time and discuss next steps.</p>
        </div>

        <p>If you have any questions in the meantime, feel free to reach out:</p>
        <ul style="list-style: none; padding: 0;">
          <li>📧 <a href="mailto:info@qashcapital.com">info@qashcapital.com</a></li>
          <li>💬 <a href="https://wa.me/2348055556745">WhatsApp: +234 805 555 6745</a></li>
        </ul>

        <p style="margin-top: 30px; color: #666; font-size: 14px;">
          Best regards,<br />
          <strong style="color: #4b0d18;">Qash Capital</strong>
        </p>
      </div>
    `;

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'bookings@qashcapital.com',
      to: 'info@qashcapital.com',
      subject: `New Advisory Booking Request from ${data.name}`,
      html: adminEmailHtml,
      replyTo: data.email,
    });

    if (adminEmail.error) {
      console.error('Failed to send admin email:', adminEmail.error);
      return NextResponse.json(
        { error: 'Failed to send booking request' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const userEmail = await resend.emails.send({
      from: 'bookings@qashcapital.com',
      to: data.email,
      subject: 'We Received Your Advisory Booking Request',
      html: userEmailHtml,
    });

    if (userEmail.error) {
      console.error('Failed to send user confirmation email:', userEmail.error);
      // Don't fail the request if user email fails, admin email was sent
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Booking request received. We will contact you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing booking request:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}
