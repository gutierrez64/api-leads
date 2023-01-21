import mongoose from "mongoose";
const connectDatabase = () => {
    console.log("Connecting...");
    mongoose.connect(
        process.env.DATABASE_PATH,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(() => console.log("Connected to the database."))
        .catch((error) => console.log(error));
}

export default connectDatabase;