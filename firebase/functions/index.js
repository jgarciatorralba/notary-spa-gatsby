// Import modules
const functions = require("firebase-functions");
const nodemailer = require('nodemailer');

/* 
  When the cloud function is deployed,
  change the origin to 'https://your-deployed-app-url
*/
const cors = require('cors')({ origin: true });

// Create and config transporter
// let transporter = nodemailer.createTransport({
//   host: 'your host',
//   port: your - port - number,
//   secure: true, // true for 465, false for other ports
//   auth: {
//     user: 'your@email',
//     pass: 'your password.',
//   },
// });

// Export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {

  // Enable CORS using the `cors` express middleware.
  cors(req, res, async () => {
    // Get contact form data from the req and then assigned it to variables
    const fullname = req.body.fullname;
    const email = req.body.email;
    const message = req.body.message;
    const token = req.body.token;

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

    }

    // //config the email message
    // const mailOptions = {
    //   from: email,
    //   to: `your@email`,
    //   subject: 'New message from the nodemailer-form app',
    //   text: `${name} says: ${message}`,
    // };

    // //call the built in `sendMail` function and return different responses upon success and failure
    // return transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     return res.status(500).send({
    //       data: {
    //         status: 500,
    //         message: error.toString(),
    //       },
    //     });
    //   }

    //   return res.status(200).send({
    //     data: {
    //       status: 200,
    //       message: 'sent',
    //     },
    //   });
    // });
  });
});
