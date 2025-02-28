const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, SENDERS_MAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: `${SENDERS_MAIL}@gmail.com` };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
