const express = require("express");
const connectDatabase = require("./src/database/db");
const app = express();

const userRoute = require("./src/routes/lead.route");

const port = process.env.PORT || 3000;

connectDatabase();
app.use(express.json());
app.use("/lead", userRoute);

app.listen(port, () => console.log(`API listening on port: ${port}`));
