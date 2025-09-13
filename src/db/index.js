import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);
        console.log('Database Connected successfully!!')
    } catch (error) {
        console.log("ERROR", error);
        throw error
    }
}





// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log('MONGODB connection error', error);
//         process.exit(1);
//     }
// }


export default connectDB;