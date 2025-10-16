// Optional SendGrid support - only used if SENDGRID_API_KEY is set
let sgMail = null

export async function getMailer(){
  if(!process.env.SENDGRID_API_KEY) return null
  if(sgMail) return sgMail
  try{
    const mod = await import('@sendgrid/mail')
    sgMail = mod.default
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    return sgMail
  } catch(e){
    console.warn('SendGrid import failed:', e.message)
    return null
  }
}

// HTML template for admin notifications
export function getAdminTemplate({ name, email, message }){
  return {
    subject: `New contact from ${name}`,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Message:</strong></p>
      <div style="padding:12px;background:#f8f9fa;border-radius:4px;margin:8px 0">
        ${message.replace(/\n/g, '<br>')}
      </div>
      <hr style="margin:20px 0;border:0;border-top:1px solid #eee">
      <p style="color:#666;font-size:14px">
        Received via Aquaafree contact form
      </p>
    `,
    text: `New contact from ${name} <${email}>\n\nMessage:\n${message}`,
  }
}

// HTML template for auto-reply to contact
export function getAutoReplyTemplate({ name }){
  return {
    subject: 'Thanks for contacting Aquaafree',
    html: `
      <h2>Thanks for your message, ${name}!</h2>
      <p>We've received your contact form submission and will get back to you shortly.</p>
      <p>Best regards,<br>The Aquaafree Team</p>
      <hr style="margin:20px 0;border:0;border-top:1px solid #eee">
      <p style="color:#666;font-size:14px">
        This is an automated response to your message via the Aquaafree contact form
      </p>
    `,
    text: `Thanks for your message, ${name}!\n\nWe've received your contact form submission and will get back to you shortly.\n\nBest regards,\nThe Aquaafree Team`,
  }
}

// Send both admin notification and auto-reply
export async function sendContactEmails({ name, email, message }){
  const mailer = await getMailer()
  if(!mailer || !process.env.FROM_EMAIL) return false

  try{
    // Send admin notification if TO_EMAIL is set
    if(process.env.TO_EMAIL){
      const adminMail = getAdminTemplate({ name, email, message })
      await mailer.send({
        to: process.env.TO_EMAIL,
        from: process.env.FROM_EMAIL,
        ...adminMail,
      })
    }

    // Send auto-reply to contact
    const replyMail = getAutoReplyTemplate({ name })
    await mailer.send({
      to: email,
      from: process.env.FROM_EMAIL,
      ...replyMail,
    })

    return true
  } catch(e){
    console.error('SendGrid error:', e.message)
    return false
  }
}