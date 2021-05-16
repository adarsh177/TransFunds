const nodemailer = require("nodemailer");
class MailsManager{
    constructor(){
        
    }

    init(email, password){
        this.mail = nodemailer.createTransport({
            host: "smtp.gmail.com",
            pool: true,
            maxConnections: 10,
            maxMessages: 150,
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: email, // generated ethereal user
                pass: password, // generated ethereal password
            },
        });

        console.log('Connected successfully to server: MailsManager');
    }

    sendMail(to, subject, body, bodyHTML, from = 'TransFUNDS'){
        // send mail with defined transport object
        console.log('sENDING EMAIL');

        this.mail.sendMail({
            from: `"${from}" <developersmonk@gmail.com>`,
            to: to,
            subject: subject,
            text: body,
            html: bodyHTML
        }, (err, info) => {
            console.log('Error', err);
            console.log('Info: ', info);
        });
    }
}

module.exports = MailsManager;