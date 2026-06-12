# EmailJS Setup Guide

Your contact form is now integrated with EmailJS and ready to send emails to **aichouneaya@gmail.com**. Follow these steps to complete the setup:

## Step 1: Create a Free EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (free tier includes 200 emails/month)
3. Sign up with your email or Google account
4. Verify your email

## Step 2: Get Your Public Key

1. After logging in, go to **Account** (top-right corner)
2. Go to the **API Keys** tab
3. Copy your **Public Key**
4. Open `src/sections/Contact.jsx` and replace:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY_HERE')
   ```
   with:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY_HERE') // Paste your actual key
   ```

## Step 3: Add Email Service (Gmail)

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail**
4. Name it (e.g., "Gmail Service") - copy this name as your **SERVICE_ID**
5. Connect your Gmail account
6. Save the service

## Step 4: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it (e.g., "Contact Form") - copy this name as your **TEMPLATE_ID**
4. Use this template content:

```
Subject: New message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

5. Make sure these variables are used:
   - `{{from_name}}` - visitor's name
   - `{{from_email}}` - visitor's email
   - `{{message}}` - visitor's message

6. Set **To Email** to: `{{to_email}}`
7. Set **Reply-To** to: `{{reply_to}}`
8. Save the template

## Step 5: Update Your Contact Form

Open `src/sections/Contact.jsx` and replace the placeholders at the top:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID_HERE'      // Replace with your service name
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE'    // Replace with your template name
```

## Example with Real Values

```javascript
const SERVICE_ID = 'service_xyz123'
const TEMPLATE_ID = 'template_abc456'
```

## Testing Your Form

1. Run your app: `npm run dev`
2. Go to the Contact section
3. Fill out the form and submit
4. You should receive the email at aichouneaya@gmail.com within seconds!

## Troubleshooting

### "Failed to send message" error
- Check that your Public Key, Service ID, and Template ID are correct
- Make sure your EmailJS account has active email service connected
- Check browser console (F12) for detailed error messages

### Not receiving emails
- Check your spam/trash folder
- Verify the service is connected to Gmail
- Make sure the email template variables match the form fields

### Rate limiting
- Free tier: 200 emails/month
- Check EmailJS dashboard for usage stats

## Important Notes

- Your Public Key is safe to expose (it's meant to be public)
- Never share your private key
- Keep your Gmail password secure in EmailJS settings
- Test thoroughly before deploying to production

## Support

For more help, visit:
- EmailJS Documentation: https://www.emailjs.com/docs/
- GitHub Issues: https://github.com/emailjs-com/emailjs-sdk

---
After completing these steps, your contact form will automatically send emails to aichouneaya@gmail.com! 🎉
