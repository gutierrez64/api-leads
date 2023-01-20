import mongoose from "mongoose";
const connectDatabase = () => {
    console.log("Connecting...");
    mongoose.connect(
        `mongodb+srv://root:dbpasswordcluster04042@cluster0.xlse9nt.mongodb.net/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(() => console.log("Connected to the database."))
        .catch((error) => console.log(error));
}

export default connectDatabase;