import express from "express";
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv";

import leadRoute from "./src/routes/lead.route.js";
import adminRoute from "./src/routes/admin.route.js";
import authRoute from "./src/routes/auth.route.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

connectDatabase();

app.use(express.json());
app.use("/lead", leadRoute);
app.use("/admin", adminRoute);
app.use("/auth", authRoute);

app.listen(port, () => console.log(`API listening on port: ${port}`));