# Email Preview - Contact Form Messages

## What You'll Receive

When someone fills out your contact form, you'll receive an email that looks like this:

---

### Email Subject:
```
New Contact Form Message from [Visitor's Name]
```

### Email Body:
```
Hello Mohammed Ashfaq Hussain,

You have received a new message from your portfolio website:

From: John Doe
Email: john.doe@example.com

Message:
Hi Mohammed,

I came across your portfolio and I'm impressed with your Oracle database expertise. 
We're looking for a consultant to help us with a Data Guard implementation for our 
mission-critical systems. 

Could we schedule a call to discuss the project requirements? We're based in Riyadh 
and would prefer someone with local experience.

Best regards,
John Doe

---
This email was sent from your portfolio contact form.
Reply directly to this email to respond to John Doe.
```

---

## Email Structure Details

### Template Variables Used:
- `{{to_name}}` - Your name (Mohammed Ashfaq Hussain)
- `{{from_name}}` - Visitor's name (from form)
- `{{from_email}}` - Visitor's email (from form)
- `{{message}}` - Visitor's message (from form)

### Email Features:
- ✅ **Reply-to** is set to the visitor's email, so you can reply directly
- ✅ **From** shows the visitor's name and email
- ✅ **Subject** includes the visitor's name for easy identification
- ✅ **Professional formatting** with clear sections

### Example Scenarios:

#### Scenario 1: Project Inquiry
**Subject:** New Contact Form Message from Sarah Ahmed

**Body:**
```
Hello Mohammed Ashfaq Hussain,

You have received a new message from your portfolio website:

From: Sarah Ahmed
Email: sarah.ahmed@company.com

Message:
Hello,

We need assistance with migrating our Oracle 12c database to 19c. 
Our system handles 50TB of data and requires zero downtime migration.
Can you provide a quote and timeline?

Thank you,
Sarah Ahmed
```

#### Scenario 2: Consultation Request
**Subject:** New Contact Form Message from Ahmed Al-Rashid

**Body:**
```
Hello Mohammed Ashfaq Hussain,

You have received a new message from your portfolio website:

From: Ahmed Al-Rashid
Email: ahmed@techcorp.sa

Message:
Hi Mohammed,

I saw your experience with GoldenGate replication. We're implementing 
a real-time data synchronization solution between our primary and 
DR sites. Would you be available for a consultation?

Best,
Ahmed
```

---

## How It Works

1. **Visitor fills form** → Name, Email, Message
2. **Form submits** → EmailJS processes the data
3. **EmailJS sends email** → Using your configured template
4. **You receive email** → In your inbox (Gmail, Outlook, etc.)
5. **You reply** → Directly to the visitor's email address

---

## Current Status

⚠️ **EmailJS is NOT yet configured**

To enable email sending:
1. Follow the setup instructions in `EMAILJS_SETUP.md`
2. Update the credentials in `src/parts/Discuss.js`
3. Test the form to verify emails are being sent

Until configured, the form will show a warning message when submitted.


