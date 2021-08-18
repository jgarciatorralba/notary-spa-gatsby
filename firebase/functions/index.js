// Import modules
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");

// Enable CORS
const appUrl = functions.config().deployed_app.url;
const cors = require("cors")({
  origin: appUrl ? appUrl : true,
});

// Create and config transporter
const emailService = functions.config().email_sender.service;

let transporter;
if (emailService == "gmail") {
  transporter = nodemailer.createTransport({
    service: emailService,
    auth: {
      user: functions.config().email_sender.user,
      pass: functions.config().email_sender.password,
    },
  });
} else {
  transporter = nodemailer.createTransport({
    host: functions.config().email_sender.host,
    port: functions.config().email_sender.port,
    auth: {
      user: functions.config().email_sender.user,
      pass: functions.config().email_sender.password,
    },
  });
}

// Export a cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {

  // Enable CORS using the `cors` express middleware
  cors(req, res, async () => {

    // Get contact form data from the req and then assign it to variables
    const fullname = req.body.fullname;
    const email = req.body.email;
    const message = req.body.message;
    const token = req.body.token;
    const language = req.body.language;

    // Validate reCaptcha and send error response if invalid
    const recaptchaBaseUrl = "https://www.google.com/recaptcha/api/siteverify";
    const verificationUrl = `${recaptchaBaseUrl}?secret=${functions.config().recaptcha.secret}&response=${token}`

    if (!token) {
      return res
        .status(400)
        .json(
          {
            data: null,
            error: "Bad Request: Missing recaptcha token"
          }
        );
    }

    try {
      const response = await fetch(verificationUrl, {
        method: "POST",
      });
      const data = await response.json();
      if (!data.success || data.score < 0.7) {
        return res
        .status(400)
        .json(
          {
            data: null,
            error: "Bad Request: Invalid token or insufficient recaptcha score"
          }
        );
      }
    } catch (error) {
      return res
        .status(500)
        .json(
          {
            data: null,
            error: error.toString()
          }
        );
    }

    // Config the email message
    let subject;
    let html;
    if (language === "ca") {
      subject = "Missatge enviat per formulari web";
      html = `
        <h4><strong>Autor</strong>:</h4>
        <p>${fullname}</p>
        <br>
        <h4><strong>Contingut</strong>:</h4>
        <p>${message}</p>
        <br>
      `;
    } else {
      subject = "Mensaje enviado por formulario web";
      html = `
        <h4><strong>Autor</strong>:</h4>
        <p>${fullname}</p>
        <br>
        <h4><strong>Contenido</strong>:</h4>
        <p>${message}</p>
        <br>
      `;
    }

    let emailData = {
      from: email,
      to: functions.config().email_receiver.address,
      subject: subject,
      html: html,
    };

    // Call the built in `sendMail` function from nodemailer and return response upon success or failure
    return transporter.sendMail(emailData, (error, info) => {
      if (error) {
        return res
          .status(500)
          .json({
            data: null,
            error: error.toString(),
          });
      }

      return res
        .json({
          data: {
            message: "Email sent successfully!",
            info: info,
          },
          error: null,
      });
    });
  });
});
