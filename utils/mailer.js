const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 25,
    secure: false, 
    auth: {
      user: "b7dfae99eef9f1",
      pass: "16aa9d245b26fd",
    },
  });
module.exports = {
    sendMailForgotPassword: async function(to,URL){
        return await transporter.sendMail({
            to:to,
            subject:"THU MOI DU LICH VIEC NHE VOLT CAO",
            html:`<a href=${URL}>CLICK VAO DAY DE DANG KI QUA CAM</a>`
        })
    }
}