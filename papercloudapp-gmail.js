"use strict";
const nodemailer = require("nodemailer");

// initialize nodemailer
var transporter = nodemailer.createTransport(
  {
    service: 'gmail',
    auth: {
      user: 'metalliniumrox@gmail.com',
      pass: 'qqaolkktqjgghzpg'
    }
  }
);


async function papercloudappSendMailNoAttachment(from, to, subject, text, html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: from, // sender address
    to: "metalliniumrox@gmail.com, prabhakar_10sharma@yahoo.com", // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  });
  console.log("Message sent: %s", info.messageId);
}

async function papercloudappSendMailWithAttachment(from, to, subject, text, html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: from, // sender address
    to: "metalliniumrox@gmail.com, prabhakar_10sharma@yahoo.com", // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
    attachments: [{ filename: "guitar-six.jpg", path: "./attachments/guitar-six.jpg" }]
  });
  console.log("Message sent: %s", info.messageId);
}

// papercloudappSendMailNoAttachment('metalliniumrox@gmail.com', '', 'Dynamic Subject', 'Text Hello World', '<b>HTML Hello world?</b>').catch(console.error);
// papercloudappSendMailWithAttachment('metalliniumrox@gmail.com', '', 'Dynamic Subject', 'Text Hello World', '<b>HTML Hello world?</b>').catch(console.error);