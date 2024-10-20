import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorEmail = async (email: string, code: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Your Two-Factor Authentication Code",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333;">
          <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <h1 style="color: #333; font-size: 24px;">Your Two-Factor Authentication Code</h1>
              <p style="line-height: 1.5; margin: 16px 0;">Hello,</p>
              <p style="line-height: 1.5; margin: 16px 0;">For additional security, we require you to enter the following code to complete your sign-in process:</p>
              <div style="display: inline-block; padding: 12px 24px; margin-top: 20px; font-size: 20px; font-weight: bold; color: #1e293b; background-color: #e2e8f0; border-radius: 6px;">${code}</div>
              <p style="line-height: 1.5; margin: 16px 0;">If you didn’t request this code, please contact our support team immediately.</p>
              <p style="line-height: 1.5; margin: 16px 0;">Best regards,<br>Your Company Team</p>
              <div style="font-size: 12px; color: #666; margin-top: 20px;">
                  <p>This is an automated message, please do not reply.</p>
              </div>
          </div>
      </body>
      </html>
    `,
  });
};

export const sendPasswordResetEmail = async (email: string, resetToken: string) => {
  const resetLink = `${domain}/auth/new-password?token=${resetToken}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset Your Password",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333;">
          <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <h1 style="color: #333; font-size: 24px;">Password Reset Request</h1>
              <p style="line-height: 1.5; margin: 16px 0;">Hello,</p>
              <p style="line-height: 1.5; margin: 16px 0;">We received a request to reset your password. You can reset your password by clicking the button below:</p>
              <a href="${resetLink}" style="display: inline-block; padding: 12px 24px; margin-top: 20px; font-size: 16px; color: #ffffff; background-color: #1e293b; text-decoration: none; border-radius: 6px;">Reset Password</a>
              <p style="line-height: 1.5; margin: 16px 0;">If you did not request this, you can ignore this email, and your password will remain unchanged.</p>
              <p style="line-height: 1.5; margin: 16px 0;">Best regards,<br>Your Company Team</p>
              <div style="font-size: 12px; color: #666; margin-top: 20px;">
                  <p>This is an automated message, please do not reply.</p>
              </div>
          </div>
      </body>
      </html>
    `,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",

    to: email,
    subject: "Confirm Your Email Address",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333;">
          <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <h1 style="color: #333; font-size: 24px;">Welcome to Our Service!</h1>
              <p style="line-height: 1.5; margin: 16px 0;">Hi there,</p>
              <p style="line-height: 1.5; margin: 16px 0;">Thank you for signing up! To get started, please confirm your email address by clicking the button below:</p>
              <a href="${confirmLink}" style="display: inline-block; padding: 12px 24px; margin-top: 20px; font-size: 16px; color: #ffffff; background-color: #1e293b; text-decoration: none; border-radius: 6px;">Confirm Email</a>
              <p style="line-height: 1.5; margin: 16px 0;">If you didn’t create an account with us, please ignore this email.</p>
              <p style="line-height: 1.5; margin: 16px 0;">Best regards,<br>Your Company Team</p>
              <div style="font-size: 12px; color: #666; margin-top: 20px;">
                  <p>This is an automated message, please do not reply.</p>
              </div>
          </div>
      </body>
      </html>
    `,
  });
};
