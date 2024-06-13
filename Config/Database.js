import mongoose from "mongoose";
// const connectDatabaseString = ;

const connectToDatabase = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Database connect succesfully");
};

export default connectToDatabase;
