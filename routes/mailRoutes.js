const express = require("express");
const controllers = require("../controllers/mailControllers");

const router = express.Router();

router.post("/send-mail", controllers.sendMail);

module.exports = router;
