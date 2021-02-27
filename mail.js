// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

require('dotenv').config({path: '.env'});
const sgMail = require('@sendgrid/mail');
console.log(process.env.SENDGRID_API_KEY);
/*
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'jadeldik@gmail.com', // Change to your recipient
  from: 'jadeldik@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
  */