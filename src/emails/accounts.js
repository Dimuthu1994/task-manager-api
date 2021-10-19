const sgMail = require("@sendgrid/mail");
const sendGridAPIKey =
  "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";

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "dimuthudiss6@gmail.com",
    subject: "Thanks for Joining in",
    text: `Welcome to the app ${name}.Let us know how you get along with the app  `,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "dimuthudiss6@gmail.com",
    subject: "Sorry to see you go",
    text: `Goodbye ${name}.We hope to see you back soon`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
