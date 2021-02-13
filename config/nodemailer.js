const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'akshaypanchal201318@gmail.com',
        pass: 'Akshay@321'
    }
});

let renderTamplet = (data, relativePath) =>{

    let mailHtml;
    ejs.renderFile(
        path.join(__dirname, '../mailers', relativePath),
        data,
        function(err, templet){
            if(err){
                console.log(err);
                return;
            }else{
                mailHtml =templet;
            }
        }
    );
    return mailHtml;
}

module.exports = {
    transporter: transporter , 
    renderTamplet: renderTamplet
}