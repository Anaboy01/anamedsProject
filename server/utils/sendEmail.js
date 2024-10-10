const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const sendEmail = async (
  subject,
  send_to,
  sent_from,
  reply_to,
  template,
  name,
  link,
  requesterName
) => {
  try {
    // Create Email Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const handlebarOptions = {
      viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve("./views"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./views"),
      extName: ".handlebars",
    };

    transporter.use("compile", hbs(handlebarOptions));

    // Options for sending email
    const options = {
      from: sent_from,
      to: send_to,
      replyTo: reply_to,
      subject: subject,
      template, // String representing template name
      context: {
        name,
        link,
        requesterName,
      },
    };

    // Send the email
    const info = await transporter.sendMail(options);
    console.log('Email sent successfully: ', info);
    return info;
  } catch (err) {
    console.error('Error sending email:', err);
    throw new Error('Email could not be sent');
  }
};

module.exports = sendEmail;
