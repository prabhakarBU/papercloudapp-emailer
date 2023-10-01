const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

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

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions));


const mailOptions = {
    from: '"My Company" <my@company.com>', // sender address
    template: "email", // the name of the template file, i.e., email.handlebars
    to: "metalliniumrox@gmail.com",
    subject: `Welcome to My Company, User`,
    context: {
        name: "user.name",
        company: 'my company'
    },
}

async function papercloudappSendMail() {
    
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: " + info.response);
    } catch (error) {
        console.log(`Nodemailer error sending email to metalliniumrox@gmail.com`, error);
    }
}

main();