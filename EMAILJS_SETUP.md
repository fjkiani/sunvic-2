# EmailJS Setup Guide for SunVic

This guide will help you set up EmailJS to handle consultation form submissions for your SunVic website.

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Save your Service ID** (you'll need this later)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Copy and paste the HTML template from `src/templates/consultation-email-template.html`
4. **Important**: Make sure to use these exact variable names in your template:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{project_type}}`
   - `{{budget_range}}`
   - `{{timeline}}`
   - `{{property_address}}`
   - `{{project_description}}`
   - `{{preferred_contact}}`
   - `{{preferred_time}}`
   - `{{submission_time}}`
   - `{{company_name}}`
5. **Save your Template ID** (you'll need this later)

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Save this key** (you'll need this later)

## 5. Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const emailJsConfig = {
  SERVICE_ID: 'your_actual_service_id',    // From step 2
  TEMPLATE_ID: 'your_actual_template_id',  // From step 3  
  PUBLIC_KEY: 'your_actual_public_key',    // From step 4
};
```

## 6. Update Email Recipients

In `src/components/forms/ConsultationForm.tsx`, update line 70:

```typescript
to_email: 'your-business-email@domain.com', // Replace with your actual business email
```

## 7. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to your website
3. Click any "Schedule Consultation" button
4. Fill out and submit the test form
5. Check your email inbox for the consultation request

## 8. Email Template Features

Your professional email template includes:

- **SunVic branding** with your company colors
- **Priority alert banner** for urgent response
- **Organized client information** with clickable phone/email links
- **Color-coded project details** (blue for project type, green for budget, yellow for timeline)
- **Highlighted project description**
- **Contact preferences** clearly displayed
- **Action items checklist** for your team
- **Professional footer** with company branding

## 9. Customization Options

### Update Company Information
Edit the template in EmailJS dashboard to change:
- Company name and contact information
- Branding colors and styling
- Action items and next steps

### Modify Form Fields
To add/remove form fields:
1. Update `src/config/emailjs.ts` interface
2. Update `src/components/forms/ConsultationForm.tsx` form
3. Add corresponding variables to your EmailJS template

## 10. Rate Limits & Quotas

**Free Plan Limits:**
- 200 emails/month
- 50 emails/day

**If you need more:**
- Upgrade to a paid plan for higher limits
- Consider implementing form validation to reduce spam

## 11. Security Best Practices

- ✅ **Never expose your private key** in frontend code
- ✅ **Use reCAPTCHA** if you experience spam (optional upgrade)
- ✅ **Validate form data** before sending
- ✅ **Rate limit submissions** per IP address

## 12. Troubleshooting

### Form Not Sending
1. Check browser console for JavaScript errors
2. Verify EmailJS credentials in `emailjs.ts`
3. Ensure template variable names match exactly
4. Check EmailJS dashboard for error logs

### Not Receiving Emails
1. Check spam/junk folders
2. Verify email service configuration
3. Test with EmailJS dashboard testing tool
4. Ensure `to_email` address is correct

### Template Not Rendering
1. Verify HTML syntax in EmailJS template editor
2. Check that all `{{variables}}` are properly formatted
3. Use EmailJS preview feature to test template

## Support

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Support**: Available in your dashboard
- **Code Issues**: Check the form validation and error handling in `ConsultationForm.tsx`

---

## Invoice Email Setup (NEW!)

### 14. Create Invoice Email Template

1. In your EmailJS dashboard, create a **second template** for invoice emails
2. Click **Create New Template** 
3. Copy the HTML from `src/templates/invoice-email-template.html`
4. Use these variable names in your template:
   - `{{to_email}}` - Recipient email
   - `{{to_name}}` - Recipient name  
   - `{{from_name}}` - Your company name
   - `{{from_email}}` - Your email address
   - `{{invoice_number}}` - Invoice number
   - `{{client_name}}` - Client name
   - `{{project_address}}` - Project address
   - `{{invoice_total}}` - Total amount
   - `{{invoice_html}}` - Complete invoice HTML
   - `{{submission_time}}` - Invoice date
   - `{{company_name}}` - Your company name
5. **Save your Invoice Template ID** (update `INVOICE_TEMPLATE_ID` in `emailjs.ts`)

### 15. Update EmailJS Configuration

Update `src/config/emailjs.ts` with your invoice template ID:

```typescript
export const emailJsConfig = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_consultation_template_id',  
  INVOICE_TEMPLATE_ID: 'your_invoice_template_id', // Add this!
  PUBLIC_KEY: 'your_public_key',
};
```

### 16. How Invoice Emails Work

- Navigate to `/invoice` page
- Fill out client information including email address
- Create your invoice with phases and line items
- Click **"Email Invoice"** to send professionally formatted email
- Client receives complete invoice HTML embedded in email
- Success/error notifications confirm delivery

## Quick Setup Checklist

**Consultation Forms:**
- [ ] Created EmailJS account
- [ ] Set up email service and saved Service ID
- [ ] Created consultation email template and saved Template ID
- [ ] Copied Public Key
- [ ] Updated `src/config/emailjs.ts` with real credentials
- [ ] Updated recipient email in `ConsultationForm.tsx`
- [ ] Tested form submission
- [ ] Verified email delivery

**Invoice Emails (Optional):**
- [ ] Created invoice email template using `invoice-email-template.html`
- [ ] Saved Invoice Template ID
- [ ] Updated `INVOICE_TEMPLATE_ID` in `emailjs.ts`
- [ ] Tested invoice email from `/invoice` page
- [ ] Verified invoice email delivery and formatting

Once completed, your consultation forms will automatically send professional, branded emails to your business inbox whenever a potential client submits a request, and you can send beautiful invoice emails directly to clients! 