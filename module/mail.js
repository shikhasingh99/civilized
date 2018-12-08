const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const config = require("../../config.json");

module.exports = {
    sendMail: function (email, subject, text, from, html) {
        return new Promise((resolve, reject) => {
            var mailer = nodemailer.createTransport(smtpTransport({
                host: config.SMTP_HOST,
                port: config.SMTP_PORT,
                auth: {
                    user: config.SMTP_USER,
                    pass: config.SMTP_PASS
                }
            }));
            mailer.sendMail({
                from: from,
                to: email,
                subject: subject,
                template: text,
                html: html
            }, (error, response) => {
                if (error) {
                    reject("Email not send successfully");
                } else {
                    resolve({ message: "Email send successfully" });
                }
                mailer.close();
            });
        })
    }
};