"use strict";
const nodemailer = require("nodemailer");

// initialize nodemailer
var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'papercloudapp@gmail.com',
            pass: 'tnnbgjcbskuklcir'
        }
    }
);


async function sendMailWithNoAttachment(from, to, subject, text, html) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        name: 'PaperCloudApp Emailer',
        from: "PaperCloudApp Emailer "+from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
    console.log("Message sent: %s", info.messageId);
}

async function sendMailWithAttachment(from, to, subject, text, html, attachments) {

    // send mail with defined transport object
    const info = await transporter.sendMail({
        name: 'PaperCloudApp Emailer',
        from: "PaperCloudApp Emailer "+from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
        attachments: attachments
    });
    console.log("Message sent: %s", info.messageId);
}

const attachments = [{ filename: "guitar-six.jpg", path: "https://penpaperclouduploadjson.s3.us-east-2.amazonaws.com/51DgIR0k5UL._SX352_BO1%2C204%2C203%2C200_.jpg" }]
sendMailWithNoAttachment('metalliniumrox@gmail.com', "metalliniumrox@gmail.com, prabhakar_10sharma@yahoo.com", 'Dynamic Subject', 'Text Hello World', '<b>HTML Hello world?</b>').catch(console.error);
sendMailWithAttachment('metalliniumrox@gmail.com', "metalliniumrox@gmail.com, prabhakar_10sharma@yahoo.com", 'Dynamic Subject', 'Text Hello World', '<b>HTML Hello world?</b>', attachments).catch(console.error);

module.exports = { sendMailWithNoAttachment, sendMailWithAttachment }