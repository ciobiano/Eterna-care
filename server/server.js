const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
require("dotenv").config();

const dbConfig = require("./config/dbConfig");

app.listen(port, () => console.log(`Server is running on port ${port}`));
