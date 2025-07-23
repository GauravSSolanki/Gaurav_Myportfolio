import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Create transporter using your Gmail SMTP credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gauravpanahera@gmail.com",
        pass: "ggou plcl rjzo krcz", // Your app password
      },
    })

    // Email to you (receiving the contact form submission)
    const mailToYou = {
      from: "gauravpanahera@gmail.com",
      to: "gauravpanahera@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 6px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 14px;">This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    }

    // Auto-reply email to the sender
    const autoReply = {
      from: "gauravpanahera@gmail.com",
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">Thank you for reaching out!</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">Hi ${name},</p>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0; color: #374151;"><strong>Your message:</strong></p>
            <p style="margin: 10px 0 0 0; color: #4b5563; font-style: italic;">"${message}"</p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            I typically respond within 24-48 hours. In the meantime, feel free to check out my projects on 
            <a href="https://github.com/GauravSSolanki" style="color: #2563eb; text-decoration: none;">GitHub</a> 
            or connect with me on 
            <a href="https://linkedin.com/in/gaurav-singh-solanki-a19b801a9" style="color: #2563eb; text-decoration: none;">LinkedIn</a>.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #374151; margin-bottom: 5px;"><strong>Best regards,</strong></p>
            <p style="color: #374151; margin-bottom: 5px;"><strong>Gaurav Singh Solanki</strong></p>
            <p style="color: #6b7280; font-size: 14px; margin: 0;">MERN Stack Developer</p>
            <p style="color: #6b7280; font-size: 14px; margin: 5px 0 0 0;">📧 gauravpanahera@gmail.com | 📱 9587481609</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailToYou)
    await transporter.sendMail(autoReply)

    return NextResponse.json({ message: "Emails sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
