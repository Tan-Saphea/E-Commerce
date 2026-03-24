# Email Setup Guide for Contact Form

## Option 1: Using EmailJS (Recommended - No Backend Needed)

### Step 1: Create EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Email Service

1. Go to "Email Services" in your dashboard
2. Click "Add Service"
3. Select Gmail or your email provider
4. Follow the setup instructions (you'll need to allow less secure apps for Gmail)
5. Copy your **Service ID** (e.g., `service_gmail_xxxxx`)

### Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:
   - **Name**: `template_contact`
   - **Subject**: `New Contact Message from {{from_name}}`
   - **Email Body**:

   ```
   Hello,

   You have received a new message from {{from_name}} ({{from_email}}):

   {{message}}

   Best regards,
   Contact Form
   ```

### Step 4: Get Your Public Key

1. Go to "Account" in your dashboard
2. Find your **Public Key**
3. Copy it (e.g., `abcd1234efgh5678`)

### Step 5: Update .env File

Edit the `.env` file in your project root and update:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_gmail_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_contact
VITE_CONTACT_EMAIL=tansaphea9@gmail.com
```

### Step 6: Testing

1. Save the `.env` file
2. Start your development server: `npm run dev`
3. Fill out the contact form and submit
4. You should receive the email at tansaphea9@gmail.com

## Option 2: Using a Backend (Node.js + Nodemailer)

If you prefer a backend solution, create a simple Express server with Nodemailer. Let me know if you need help setting that up!

## Troubleshooting

- **"Invalid Service ID"**: Check that your service ID matches exactly in both EmailJS and your .env file
- **"Invalid Template ID"**: Verify your template exists and the ID matches
- **Emails not sending**: Check your EmailJS quota (free tier has limits)
- **CORS errors**: EmailJS handles CORS automatically, but ensure your public key is correct

## Security Note

The public key is safe to expose in frontend code (it's only for client-to-service communication). Your private key and template setup are kept secure on EmailJS servers.
