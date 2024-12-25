require("dotenv").config();

const config = {
  PORT: Number(process.env.PORT),
  USER_EMAIL: process.env.USER_EMAIL,
  USER_PASS: process.env.USER_PASS,
};

module.exports = config;
