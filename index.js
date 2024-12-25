const express = require("express");
const cors = require("cors");
const config = require("./config");

const app = express();
const PORT = config.PORT || 8000;

// Import Routes
const mailRoutes = require("./routes/mailRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (_, res) => res.send("Hello World"));

app.use("/services", mailRoutes);

app.listen(PORT, () => console.log("SERVER STARTED ON PORT: ", PORT));
