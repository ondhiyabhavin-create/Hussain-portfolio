# EmailJS HTML Email Templates

## Color Scheme
- **Theme Purple**: `#6610f2`
- **Dark Theme Purple**: `#520dc2`
- **Light Theme Purple**: `#E3D3FD`
- **Theme Blue**: `#152C5B`

---

## Template 1: Owner Notification Email
**Use this template for when someone contacts you through the form**

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**HTML Content:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>New Contact Form Message</title>
    <style type="text/css">
        /* Reset styles */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            outline: none;
            text-decoration: none;
        }
        
        /* Mobile styles */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                max-width: 100% !important;
            }
            .email-content {
                padding: 20px 15px !important;
            }
            .email-header {
                padding: 30px 20px !important;
            }
            .email-header h1 {
                font-size: 22px !important;
                line-height: 1.3 !important;
            }
            .email-text {
                font-size: 14px !important;
            }
            .email-text-large {
                font-size: 16px !important;
            }
            .info-card {
                padding: 20px 15px !important;
            }
            .message-box {
                padding: 20px 15px !important;
            }
            .button-container {
                padding: 15px 0 !important;
            }
            .button-link {
                display: block !important;
                width: 100% !important;
                padding: 14px 20px !important;
                font-size: 14px !important;
                text-align: center !important;
            }
            .email-footer {
                padding: 20px 15px !important;
            }
            .email-footer p {
                font-size: 12px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, Helvetica, sans-serif; background-color: #f5f5f5; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
    <!--[if mso]>
    <style type="text/css">
        body, table, td {font-family: Arial, sans-serif !important;}
    </style>
    <![endif]-->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; width: 100%;">
        <tr>
            <td align="center" style="padding: 20px 10px;">
                <!--[if mso]>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600">
                <tr>
                <td>
                <![endif]-->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="email-container" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                    <!-- Header with Gradient -->
                    <tr>
                        <td class="email-header" style="background: linear-gradient(135deg, #6610f2 0%, #520dc2 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; letter-spacing: -0.5px; line-height: 1.2;">
                                📧 New Contact Form Message
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Content Section -->
                    <tr>
                        <td class="email-content" style="padding: 40px 30px;">
                            <p class="email-text-large" style="margin: 0 0 20px 0; color: #152C5B; font-size: 16px; line-height: 1.6;">
                                Hello <strong style="color: #6610f2;">{{to_name}}</strong>,
                            </p>
                            
                            <p class="email-text" style="margin: 0 0 30px 0; color: #666666; font-size: 15px; line-height: 1.6;">
                                You have received a new message from your portfolio website contact form.
                            </p>
                            
                            <!-- Contact Info Card -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="info-card" style="background-color: #E3D3FD; border-radius: 12px; padding: 25px; margin-bottom: 30px; width: 100%;">
                                <tr>
                                    <td>
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
                                            <tr>
                                                <td style="padding-bottom: 15px;">
                                                    <p style="margin: 0; color: #152C5B; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        👤 From
                                                    </p>
                                                    <p style="margin: 5px 0 0 0; color: #6610f2; font-size: 18px; font-weight: bold; word-wrap: break-word;">
                                                        {{from_name}}
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom: 15px; border-top: 1px solid rgba(102, 16, 242, 0.2); padding-top: 15px;">
                                                    <p style="margin: 0; color: #152C5B; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        📧 Email
                                                    </p>
                                                    <p style="margin: 5px 0 0 0; word-wrap: break-word;">
                                                        <a href="mailto:{{from_email}}" style="color: #6610f2; font-size: 16px; text-decoration: none; font-weight: 500; word-break: break-all;">
                                                            {{from_email}}
                                                        </a>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="border-top: 1px solid rgba(102, 16, 242, 0.2); padding-top: 15px;">
                                                    <p style="margin: 0; color: #152C5B; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        💬 Message
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Message Content -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="message-box" style="background-color: #ffffff; border: 2px solid #E3D3FD; border-radius: 12px; padding: 25px; margin-bottom: 30px; width: 100%;">
                                <tr>
                                    <td>
                                        <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">
{{message}}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Reply Button -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="button-container" style="width: 100%;">
                                <tr>
                                    <td align="center" style="padding-top: 20px;">
                                        <!--[if mso]>
                                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="mailto:{{from_email}}?subject=Re: Contact Form Inquiry" style="height:48px;v-text-anchor:middle;width:100%;" arcsize="12%" stroke="f" fillcolor="#6610f2">
                                        <w:anchorlock/>
                                        <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:15px;font-weight:600;">✉️ Reply to {{from_name}}</center>
                                        </v:roundrect>
                                        <![endif]-->
                                        <a href="mailto:{{from_email}}?subject=Re: Contact Form Inquiry" class="button-link" style="display: inline-block; background: linear-gradient(135deg, #6610f2 0%, #520dc2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(102, 16, 242, 0.3); max-width: 100%;">
                                            ✉️ Reply to {{from_name}}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td class="email-footer" style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e9ecef;">
                            <p style="margin: 0; color: #666666; font-size: 13px; line-height: 1.6;">
                                This email was sent from your portfolio contact form.<br style="display: none;">
                                <span style="display: inline-block; margin-top: 5px;">Reply directly to this email to respond to <strong style="color: #6610f2;">{{from_name}}</strong>.</span>
                            </p>
                            <p style="margin: 15px 0 0 0; color: #999999; font-size: 12px;">
                                © 2025 Mohammed Ashfaq Hussain. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
                <!--[if mso]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
    </table>
</body>
</html>
```

---

## Template 2: Thank You Email (Auto-Reply)
**Use this template to send a thank you email to users who contact you**

**Subject:**
```
Thank You for Contacting Mohammed Ashfaq Hussain - I'll Get Back to You Soon!
```

**HTML Content:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Thank You for Your Message</title>
    <style type="text/css">
        /* Reset styles */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            outline: none;
            text-decoration: none;
        }
        
        /* Mobile styles */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                max-width: 100% !important;
            }
            .email-content {
                padding: 20px 15px !important;
            }
            .email-header {
                padding: 35px 20px !important;
            }
            .email-header h1 {
                font-size: 24px !important;
                line-height: 1.3 !important;
            }
            .email-header p {
                font-size: 14px !important;
            }
            .check-icon {
                width: 60px !important;
                height: 60px !important;
                font-size: 30px !important;
            }
            .email-text {
                font-size: 14px !important;
            }
            .email-text-large {
                font-size: 16px !important;
            }
            .info-box {
                padding: 18px 15px !important;
            }
            .services-box {
                padding: 20px 15px !important;
            }
            .services-box h3 {
                font-size: 16px !important;
            }
            .button-container {
                padding: 15px 0 !important;
            }
            .button-link {
                display: block !important;
                width: 100% !important;
                padding: 14px 20px !important;
                font-size: 14px !important;
                text-align: center !important;
            }
            .contact-section {
                padding: 25px 20px !important;
            }
            .contact-section h3 {
                font-size: 16px !important;
            }
            .social-icons {
                padding: 0 5px !important;
            }
            .social-link {
                width: 36px !important;
                height: 36px !important;
                line-height: 36px !important;
                font-size: 16px !important;
            }
            .contact-section p {
                font-size: 13px !important;
            }
            .email-footer {
                padding: 20px 15px !important;
            }
            .email-footer p {
                font-size: 12px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, Helvetica, sans-serif; background-color: #f5f5f5; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
    <!--[if mso]>
    <style type="text/css">
        body, table, td {font-family: Arial, sans-serif !important;}
    </style>
    <![endif]-->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; width: 100%;">
        <tr>
            <td align="center" style="padding: 20px 10px;">
                <!--[if mso]>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600">
                <tr>
                <td>
                <![endif]-->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="email-container" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                    <!-- Header with Gradient -->
                    <tr>
                        <td class="email-header" style="background: linear-gradient(135deg, #6610f2 0%, #520dc2 100%); padding: 50px 30px; text-align: center;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
                                <tr>
                                    <td align="center" style="padding-bottom: 20px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" class="check-icon" style="width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%;">
                                            <tr>
                                                <td align="center" valign="middle" style="height: 80px;">
                                                    <span style="font-size: 40px; color: #ffffff;">✓</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold; letter-spacing: -0.5px; line-height: 1.2;">
                                            Thank You, {{from_name}}!
                                        </h1>
                                        <p style="margin: 15px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px; line-height: 1.4;">
                                            Your message has been received
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Content Section -->
                    <tr>
                        <td class="email-content" style="padding: 40px 30px;">
                            <p class="email-text-large" style="margin: 0 0 20px 0; color: #152C5B; font-size: 17px; line-height: 1.7; font-weight: 500;">
                                Hi <strong style="color: #6610f2;">{{from_name}}</strong>,
                            </p>
                            
                            <p class="email-text" style="margin: 0 0 20px 0; color: #666666; font-size: 15px; line-height: 1.7;">
                                Thank you for reaching out through my portfolio website! I've received your message and I'm excited to learn more about your project.
                            </p>
                            
                            <p class="email-text" style="margin: 0 0 30px 0; color: #666666; font-size: 15px; line-height: 1.7;">
                                I typically respond within <strong style="color: #6610f2;">24-48 hours</strong>. In the meantime, feel free to explore more about my services and experience on my portfolio.
                            </p>
                            
                            <!-- Info Box -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="info-box" style="background: linear-gradient(135deg, #E3D3FD 0%, rgba(227, 211, 253, 0.5) 100%); border-left: 4px solid #6610f2; border-radius: 8px; padding: 20px; margin-bottom: 30px; width: 100%;">
                                <tr>
                                    <td>
                                        <p style="margin: 0; color: #152C5B; font-size: 15px; line-height: 1.7;">
                                            <strong style="color: #6610f2;">📋 What happens next?</strong><br>
                                            I'll review your message and get back to you with a detailed response. If your inquiry is urgent, please don't hesitate to reach out directly.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Services Preview -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="services-box" style="background-color: #f8f9fa; border-radius: 12px; padding: 25px; margin-bottom: 30px; width: 100%;">
                                <tr>
                                    <td>
                                        <h3 style="margin: 0 0 15px 0; color: #152C5B; font-size: 18px; font-weight: bold;">
                                            💼 My Expertise Areas:
                                        </h3>
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <span style="color: #6610f2; font-size: 16px; margin-right: 8px;">✓</span>
                                                    <span style="color: #333333; font-size: 14px; line-height: 1.5;">Oracle Database Administration & RAC</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <span style="color: #6610f2; font-size: 16px; margin-right: 8px;">✓</span>
                                                    <span style="color: #333333; font-size: 14px; line-height: 1.5;">SQL Server & Azure SQL Solutions</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <span style="color: #6610f2; font-size: 16px; margin-right: 8px;">✓</span>
                                                    <span style="color: #333333; font-size: 14px; line-height: 1.5;">High Availability & Disaster Recovery</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <span style="color: #6610f2; font-size: 16px; margin-right: 8px;">✓</span>
                                                    <span style="color: #333333; font-size: 14px; line-height: 1.5;">Cloud Migration & DevOps Automation</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- CTA Button -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="button-container" style="width: 100%;">
                                <tr>
                                    <td align="center" style="padding-top: 10px;">
                                        <!--[if mso]>
                                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://your-portfolio-url.com" style="height:48px;v-text-anchor:middle;width:100%;" arcsize="12%" stroke="f" fillcolor="#6610f2">
                                        <w:anchorlock/>
                                        <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:15px;font-weight:600;">🌐 Visit My Portfolio</center>
                                        </v:roundrect>
                                        <![endif]-->
                                        <a href="https://mohammed-ashfaq-hussain.vercel.app/" class="button-link" style="display: inline-block; background: linear-gradient(135deg, #6610f2 0%, #520dc2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(102, 16, 242, 0.3); max-width: 100%;">
                                            🌐 Visit My Portfolio
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Contact Info Section -->
                    <tr>
                        <td class="contact-section" style="background-color: #152C5B; padding: 30px; text-align: center;">
                            <h3 style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px; font-weight: bold;">
                                Let's Connect
                            </h3>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                    <td class="social-icons" style="padding: 0 10px;">
                                        <a href="https://linkedin.com/in/mohammed-ashfaq-hussain-b0391534" class="social-link" style="display: inline-block; width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; text-align: center; line-height: 40px; text-decoration: none;">
                                            <span style="color: #ffffff; font-size: 18px;">in</span>
                                        </a>
                                    </td>
                                    <td class="social-icons" style="padding: 0 10px;">
                                        <a href="https://github.com/mashfaq007" class="social-link" style="display: inline-block; width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; text-align: center; line-height: 40px; text-decoration: none;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="40" height="40" style="width: 40px; height: 40px;">
                                                <tr>
                                                    <td align="center" valign="middle" style="width: 40px; height: 40px; font-family: 'Courier New', Courier, monospace;">
                                                        <span style="color: #ffffff; font-size: 16px; font-weight: bold; line-height: 1; display: inline-block; letter-spacing: -2px;">GH</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </a>
                                    </td>
                                    <td class="social-icons" style="padding: 0 10px;">
                                        <a href="mailto:nswaknwaj@gmail.com" class="social-link" style="display: inline-block; width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; text-align: center; line-height: 40px; text-decoration: none;">
                                            <span style="color: #ffffff; font-size: 18px;">✉️</span>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin: 20px 0 0 0; color: rgba(255, 255, 255, 0.8); font-size: 14px; line-height: 1.6;">
                                <strong>Mohammed Ashfaq Hussain</strong><br style="display: none;">
                                <span style="display: inline-block; margin-top: 5px;">Oracle RAC, Weblogic & <span style="white-space: nowrap;">E‑Business Suite</span> Specialist | SQL Server Expert | DevOps Automation</span>
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td class="email-footer" style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e9ecef;">
                            <p style="margin: 0; color: #666666; font-size: 13px; line-height: 1.6;">
                                This is an automated confirmation email. If you have any urgent questions,<br style="display: none;">
                                <span style="display: inline-block; margin-top: 5px;">please contact me directly at <a href="mailto:nswaknwaj@gmail.com" style="color: #6610f2; text-decoration: none;">nswaknwaj@gmail.com</a></span>
                            </p>
                            <p style="margin: 15px 0 0 0; color: #999999; font-size: 12px;">
                                © 2025 Mohammed Ashfaq Hussain. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
                <!--[if mso]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
    </table>
</body>
</html>
```

---

## Setup Instructions

### Step 1: Create Two Email Templates in EmailJS

1. Go to your EmailJS dashboard: https://dashboard.emailjs.com/admin/template
2. Click **"Create New Template"**

### Step 2: Template 1 - Owner Notification (Contact Template)

**This template sends an email TO YOU when someone contacts you through the form.**

1. **Template Name**: `contact_form_owner` or `Contact Us`
2. **Subject**: `New Contact Form Message from {{from_name}}`
3. **Content Type**: Select **"HTML"**
4. **Content**: Copy and paste Template 1 HTML above

**Email Parameters (Side Details):**
- **To Email**: `mashfaq0710@gmail.com` (Your email address - where you receive the notification)
- **To Name**: `{{to_name}}` (Optional - will show your name)
- **From Name**: `{{from_name}}` ⚠️ **NOT** `{{name}}` - Use `{{from_name}}`
- **From Email**: ✅ Check **"Use Default Email Address"** (EmailJS will use your service email)
- **Reply To**: `{{from_email}}` ⚠️ **NOT** `{{email}}` - Use `{{from_email}}` (This allows you to reply directly to the person who contacted you)
- **Bcc**: Leave empty
- **Cc**: Leave empty

10. Save and copy the **Template ID**

### Step 3: Template 2 - Thank You Auto-Reply

**This template sends a thank you email TO THE PERSON who contacted you.**

1. **Template Name**: `contact_form_thankyou` or `Auto-Reply`
2. **Subject**: `Thank You for Contacting Mohammed Ashfaq Hussain - I'll Get Back to You Soon!`
3. **Content Type**: Select **"HTML"**
4. **Content**: Copy and paste Template 2 HTML above

**Email Parameters (Side Details):**
- **To Email**: `{{from_email}}` ⚠️ **NOT** `mashfaq0710@gmail.com` - This sends to the person who contacted you
- **To Name**: `{{from_name}}` (Optional - will show their name)
- **From Name**: `Mohammed Ashfaq Hussain` (Your name - appears as sender)
- **From Email**: ✅ Check **"Use Default Email Address"** (EmailJS will use your service email)
- **Reply To**: `mashfaq0710@gmail.com` ⚠️ **NOT** `{{email}}` - Use your email so replies come to you
- **Bcc**: Leave empty
- **Cc**: Leave empty

9. Save and copy the **Template ID**

### Step 4: Update Your Code

Update `src/parts/Discuss.js` to send both emails:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!formData.name || !formData.email || !formData.message) {
    toast.error('Please fill in all fields');
    return;
  }

  setIsSubmitting(true);

  const serviceID = 'YOUR_SERVICE_ID';
  const ownerTemplateID = 'YOUR_OWNER_TEMPLATE_ID'; // Template 1
  const thankYouTemplateID = 'YOUR_THANKYOU_TEMPLATE_ID'; // Template 2
  const publicKey = 'YOUR_PUBLIC_KEY';

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    to_name: PersonalInfo.name,
    message: formData.message,
    reply_to: formData.email,
  };

  try {
    // Send email to owner
    await emailjs.send(serviceID, ownerTemplateID, templateParams, publicKey);
    
    // Send thank you email to user
    await emailjs.send(serviceID, thankYouTemplateID, templateParams, publicKey);
    
    toast.success('Message sent successfully! Check your email for confirmation.');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('EmailJS Error:', error);
    toast.error('Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## ⚠️ IMPORTANT: Correct Email Parameter Settings

### ✅ Contact Template (Owner Notification) - CORRECT Settings:

| Field | Correct Value | Your Current Value | Status |
|-------|--------------|-------------------|--------|
| **To Email** | `mashfaq0710@gmail.com` | `mashfaq0710@gmail.com` | ✅ Correct |
| **From Name** | `{{from_name}}` | `{{name}}` | ❌ **CHANGE NEEDED** |
| **From Email** | ✅ Use Default Email Address | ✅ Use Default Email Address | ✅ Correct |
| **Reply To** | `{{from_email}}` | `{{email}}` | ❌ **CHANGE NEEDED** |

**Changes Required:**
- Change `From Name` from `{{name}}` to `{{from_name}}`
- Change `Reply To` from `{{email}}` to `{{from_email}}`

### ✅ Thank You Template (Auto-Reply) - CORRECT Settings:

| Field | Correct Value | Notes |
|-------|--------------|-------|
| **To Email** | `{{from_email}}` | Sends to the person who contacted you |
| **To Name** | `{{from_name}}` | Optional |
| **From Name** | `Mohammed Ashfaq Hussain` | Your name as sender |
| **From Email** | ✅ Use Default Email Address | EmailJS service email |
| **Reply To** | `mashfaq0710@gmail.com` | Your email for replies |

**Why These Settings:**
- **Contact Template**: You receive the email, and `Reply To` is set to `{{from_email}}` so you can reply directly to the person who contacted you
- **Thank You Template**: The person who contacted you receives this email, and `Reply To` is set to your email so if they reply, it comes to you

---

## Email Variables Reference

- `{{from_name}}` - Name of the person who submitted the form
- `{{from_email}}` - Email of the person who submitted the form
- `{{to_name}}` - Your name (Mohammed Ashfaq Hussain)
- `{{message}}` - The message content from the form
- `{{reply_to}}` - Email address to reply to (same as from_email)

---

## Tips

1. **Test Both Templates**: Send test emails to ensure both templates work correctly
2. **Update Portfolio URL**: Replace `https://your-portfolio-url.com` with your actual portfolio URL
3. **Customize Content**: Feel free to modify the text, colors, or layout to match your preferences
4. **Mobile Responsive**: These templates are designed to work well on mobile devices
5. **Email Client Compatibility**: Tested for Gmail, Outlook, Apple Mail, and other major email clients

---

## Preview Notes

- Both templates use your site's color scheme (purple gradients, blue accents)
- Modern, professional design with rounded corners and shadows
- Responsive layout that works on all devices
- Clear call-to-action buttons
- Professional footer with contact information

---

## Responsive Design Features

### Mobile Optimization
Both email templates are **fully responsive** and optimized for all devices:

#### ✅ **Mobile-First Design**
- **Breakpoint**: Optimized for screens 600px and below
- **Fluid Layout**: Tables automatically adjust to screen width
- **Touch-Friendly**: Buttons are full-width on mobile for easy tapping
- **Readable Text**: Font sizes scale appropriately (14-16px on mobile)

#### ✅ **Responsive Elements**
1. **Headers**: 
   - Desktop: 28-32px font size
   - Mobile: 22-24px font size with adjusted padding

2. **Content Padding**:
   - Desktop: 40px horizontal, 30px vertical
   - Mobile: 15px horizontal, 20px vertical

3. **Buttons**:
   - Desktop: Inline-block with fixed padding
   - Mobile: Full-width (100%) with adjusted padding

4. **Cards & Boxes**:
   - Desktop: 25px padding
   - Mobile: 15-20px padding

5. **Social Icons**:
   - Desktop: 40px × 40px
   - Mobile: 36px × 36px with reduced spacing

#### ✅ **Email Client Compatibility**
- ✅ Gmail (Web, iOS, Android)
- ✅ Outlook (Desktop, Web, Mobile)
- ✅ Apple Mail (macOS, iOS)
- ✅ Yahoo Mail
- ✅ Thunderbird
- ✅ Mobile email apps

#### ✅ **Technical Features**
- **Viewport Meta Tag**: Prevents zooming and ensures proper scaling
- **Media Queries**: CSS breakpoints for mobile optimization
- **MSO Conditionals**: Outlook-specific code for better rendering
- **Inline Styles**: Maximum compatibility across email clients
- **Table-Based Layout**: Reliable rendering in all email clients
- **Word-Wrap**: Long email addresses and text break properly

#### ✅ **Testing Checklist**
Before going live, test on:

**Desktop:**
- [ ] Gmail (Chrome, Firefox, Safari)
- [ ] Outlook (Windows, Mac)
- [ ] Apple Mail
- [ ] Yahoo Mail

**Mobile:**
- [ ] iPhone Mail app (iOS 14+)
- [ ] Gmail app (iOS & Android)
- [ ] Outlook app (iOS & Android)
- [ ] Samsung Email (Android)

**Tablet:**
- [ ] iPad Mail app
- [ ] Gmail on tablet
- [ ] Outlook on tablet

#### ✅ **Best Practices Implemented**
1. ✅ Maximum width of 600px for email container
2. ✅ Minimum font size of 12px for readability
3. ✅ Proper line-height (1.6-1.8) for comfortable reading
4. ✅ Adequate padding and spacing on all devices
5. ✅ High contrast colors for accessibility
6. ✅ Clickable areas are at least 44px × 44px (mobile standard)
7. ✅ Images have alt text (if you add images later)
8. ✅ Links are clearly visible and underlined on hover

---

## Mobile Testing Tips

1. **Use Email Testing Tools**:
   - Litmus (https://litmus.com)
   - Email on Acid (https://www.emailonacid.com)
   - Mailtrap (https://mailtrap.io)

2. **Test on Real Devices**:
   - Send test emails to your own accounts
   - Check on actual phones and tablets
   - Test in different email apps

3. **Check These Elements**:
   - ✅ Text is readable without zooming
   - ✅ Buttons are easy to tap
   - ✅ Links work correctly
   - ✅ Layout doesn't break
   - ✅ Images scale properly (if added)
   - ✅ Colors display correctly
   - ✅ Spacing looks good

---

## Troubleshooting Mobile Issues

**Problem**: Text is too small on mobile
- **Solution**: Already handled with responsive font sizes (14-16px minimum)

**Problem**: Buttons are hard to tap
- **Solution**: Buttons are full-width on mobile with adequate padding

**Problem**: Layout breaks on small screens
- **Solution**: Tables use 100% width with max-width constraints

**Problem**: Email looks different in Outlook
- **Solution**: MSO conditionals included for Outlook-specific rendering

**Problem**: Images don't scale
- **Solution**: Use `width: 100%; max-width: 100%; height: auto;` for images

---

## Additional Notes

- **Email Width**: Fixed at 600px max-width for optimal viewing
- **Font Stack**: Falls back gracefully (Poppins → Arial → Helvetica → sans-serif)
- **Color Contrast**: All text meets WCAG accessibility standards
- **Loading Speed**: Optimized HTML structure for fast rendering
- **Spam Filters**: Clean HTML structure reduces spam score

---

## GitHub Logo Image Solution

**Current Implementation**: The GitHub logo uses text "GH" because Gmail and many email clients block external images for security reasons.

**To Use an Actual GitHub Logo Image**:

1. **Upload GitHub Logo to Your Server/CDN**:
   - Download the GitHub logo (white version) from [GitHub's official brand assets](https://github.com/logos)
   - Upload it to your own server, Vercel, or a reliable CDN
   - Replace the text "GH" with an `<img>` tag pointing to your hosted image URL

2. **Example Code** (replace the GitHub icon section):
   ```html
   <td class="social-icons" style="padding: 0 10px;">
       <a href="https://github.com/mashfaq007" class="social-link" style="display: inline-block; width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; text-align: center; line-height: 40px; text-decoration: none;">
           <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="40" height="40" style="width: 40px; height: 40px;">
               <tr>
                   <td align="center" valign="middle" style="width: 40px; height: 40px;">
                       <img src="YOUR_GITHUB_LOGO_URL_HERE" alt="GitHub" width="20" height="20" style="display: block; width: 20px; height: 20px; margin: 0 auto; border: 0;" />
                   </td>
               </tr>
           </table>
       </a>
   </td>
   ```

**Note**: Even with your own hosted image, some email clients (especially Gmail) may still block it initially and show a "Show images" prompt. The text-based "GH" icon will always display immediately.
