import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB Connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}`);
    // console.log("DB URL Length:", process.env.MONGODB_URI?.length);
    // console.log(
    //   "DB URL Starts With:",
    //   process.env.MONGODB_URI?.substring(0, 15),
    // );
  } catch (error) {
    console.log("Error while connecting to mongoDB : " + error);
  }
};

export default connectDB;
