module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST', 'LOCALHOST'),
      port: env('SMTP_PORT', 25),
      secureConnection: false,
      ignoreTLS: true,
      auth: {
          user: env('SMTP_USERNAME','cv@teststrapi.local'),
          pass: env('SMTP_PASSWORD','azerty'),
      },
    },
    settings: {
      defaultFrom: 'brm.mohamed.brm@gmail.com',
      defaultReplyTo: 'brm.mohamed.brm@gmail.com',
      testAddress: 'brm.mohamed.brm@gmail.com',
    },
  },
  });