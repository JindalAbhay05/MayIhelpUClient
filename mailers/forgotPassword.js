const nodeMailer =  require('../config/nodemailer');

exports.sendOtp = (payLoad) => {
    let otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp);
    nodeMailer.transporter.sendMail({
        from: 'akshaypamchal201318@gmail.com',
        to: 'akshay@daffodilsw.com',
        subject: 'Reset Password OTP',
        html: `<h1>${otp}</h1>`
     },
        (err, info) => {
            if (err) {
                console.log('Error in sending email!', err);
                return;
            }
            console.log("Mail delevered", info);
        })
}
