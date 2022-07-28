import mongoose from "mongoose";

const connectDB = () =>
  mongoose
    .connect(process.env.connectionString, () =>
      console.log("Connected to Database Successfully!")
    )
    .catch((error) => console.log(error));

export default connectDB;
