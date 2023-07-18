const nodemailer=require('nodemailer');
const EMAIL_USER=process.env.email_user;
const EMAIL_PASS=process.env.email_pass;
const Base_URL_VERIFY=process.env.Base_URL_VERIFY;

//Send Mail:-
module.exports.sendVerificationEmail= async(name ,userEmail,userId)=>{
    try 
    {

      // Create a transporter with your email service provider configuration
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            user: `${EMAIL_USER}`,
            pass: `${EMAIL_PASS}` ,
          },
        });

      // Create the email template with the verification link containing the token
        const emailOptions = {
            from: `${EMAIL_USER}`,
            to: userEmail,
            subject: "Email Verification",
            html: `Click the following link to verify your email ${name}: 
            <a href="${Base_URL_VERIFY}/verify-email?token=${userId}">Verify Email</a>`,
          };

      // Send the email
        transporter.sendMail(emailOptions, (error, info) => {
          if (error) {
            console.log("Error sending verification email:", error);
          } else {
            console.log("Verification email sent:", info.response);
            console.log(emailOptions);     
          }
        });
                 
    } catch (error) 
    {
         console.log(error.massage);       
    }
}