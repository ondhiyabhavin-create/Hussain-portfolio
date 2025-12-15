# EmailJS Setup Instructions

## How to Set Up EmailJS for Contact Form

The contact form uses EmailJS to send emails directly to your inbox. Follow these steps to configure it:

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)

### Step 2: Create an Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (e.g., `service_h4gtndg`)

### Step 3: Create an Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
Hello {{to_name}},

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and copy your **Template ID** (e.g., `template_a9tvs7a`)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_csqIxzN5mKsl1yw4ffJzV`)

### Step 5: Update the Code
Open `src/parts/Discuss.js` and replace these values:

```javascript
const serviceID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

### Email Structure Preview

When someone submits the form, you'll receive an email like this:

**Subject:** New Contact Form Message from John Doe

**Body:**
```
Hello Mohammed Ashfaq Hussain,

You have received a new message from your portfolio website:

From: John Doe
Email: john.doe@example.com

Message:
Hi, I'm interested in discussing a database migration project for our company. 
We need help with Oracle RAC implementation. Can we schedule a call?

---
This email was sent from your portfolio contact form.
Reply directly to this email to respond to John Doe.
```

### Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox
4. You should receive the email within seconds

### Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify all three IDs are correctly set in the code
- Make sure your EmailJS service is active
- Check your email provider's spam folder


