const nodemailer = require("nodemailer");
const config = require("../config");
const { getHTML, getText } = require("../utils/mailUtils");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: config.USER_EMAIL,
    pass: config.USER_PASS,
  },
});

async function main(sourceMail, destinationMail, data) {
  const { name, email, contactNumber, message } = data;

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: {
        name: "CoEdit Service", // sender name
        address: sourceMail, // sender address
      },
      to: destinationMail, // list of receivers
      subject: `${name} has contacted you via Contact Us!`, // Subject line
      text: getText(name, email, contactNumber, message), // plain text body
      html: getHTML(name, email, contactNumber, message), // html body
    });

    return info.messageId;
  } catch (error) {
    throw new Error(error);
  }
}

const sendMail = async (req, res) => {
  try {
    const data = req.body;
    const destinationMail = "microsoftclub@daiict.ac.in";

    const isValidInput = () => {
      return (
        typeof data.name === "string" &&
        data.name &&
        typeof data.email === "string" &&
        data.email &&
        typeof data.contactNumber === "string" &&
        data.contactNumber &&
        typeof data.message === "string" &&
        data.message
      );
    };

    if (!isValidInput()) {
      return res.status(400).json({ message: "Invalid input" });
    }

    await main(config.USER_EMAIL, destinationMail, data);
    return res.status(200).json({ message: "Mail sent successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Mail not sent" });
  }
};

module.exports = { sendMail };
