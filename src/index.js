import dotenv from 'dotenv'

dotenv.config({ path: './env' })

import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';


connectDB();
















// import express from 'express';
// const app = express();


// ( async () => {
//     try {
//      await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`);
//      app.on('error', (error) => {
//         console.log("Error: ", error);
//         throw error
//      })
//      app.listen(process.env.PORT, () => {
//         console.log(`App is listining on port ${process.env.PORT}`)
//      })
        
//     } catch (error) {
//         console.log('ERROR', error);
//         throw error
//     }
// })()