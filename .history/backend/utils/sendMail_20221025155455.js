const nodemailer = require('nodemailer')

const sendEmail = async options => {

    var transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.S,
        auth: {
          user: "c55e6697c1cdad",
          pass: "8097f52f4316d5"
        }
      });


}

module.exports = sendEmail;