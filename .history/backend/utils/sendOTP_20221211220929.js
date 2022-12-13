
const { Auth } = require("two-step-auth");

const sendOTP = async (emailId) => {
    try {
        const res = await Auth(emailId, "LATATA Shoping");
        console.log(res);
        console.log(res.mail);
        console.log(res.OTP);
        console.log(res.success);
      } catch (error) {
        console.log(error);
      }
} 


module.exports = sendOTP;