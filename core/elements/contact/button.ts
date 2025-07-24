const contactButtonElements: Record<string, string> = {
  "I need NDA first": 'button:has-text("I need NDA first.")',
  "I accept the Privacy Policy": 'button.nf-checkbox-container:has-text("I declare that I have read the") .nf-checkbox',
  "I agree to receive emails": 'button:has-text("I agree to receive e-mails from ICEO LAB LTD to the e-mail")',
  "I agree to receive telephone calls": 'button:has-text("I agree to receive incoming telephone calls and / or SMS from")',
  "Submit button": '[id="nf-submit-button"]',
};

export default contactButtonElements;
