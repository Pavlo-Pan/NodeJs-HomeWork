import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const {MONGO_URI} = process.env;

const connectDatabase = async()=> {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Successfully connect database");
    }
    catch(error) {
        console.log("Error connect database");
        console.log(error);
        throw error;
    }
}

export default connectDatabase;