import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({ path: './env' })

connectDB().then(() => {

    app.on('error', (error) => {
        console.log('ERROR: ', error);
        throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log('Mongo db connection failed!!', err)
})
















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