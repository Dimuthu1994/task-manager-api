const sgMail = require("@sendgrid/mail");
const sendGridAPIKey =
  "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";

sgMail.setApiKey(sendGridAPIKey);

sgMail.send({
  to: "dimuthudiss6@gmail.com",
  from: "dimuthudiss6@gmail.com",
  subject: "This is my first send",
  text: "hukahan.................",
});
