import mongoose from "mongoose";


export const connectDb = async()=>{
    try {
         await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("connected to database");
    } catch (error) {
        console.log("Error while connecting to db: ",error);
        process.exit(1);
    }
}

