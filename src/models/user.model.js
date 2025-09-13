import mongoose, {Schema, Types } from 'mongoose';

const userSchema = new Schema({
   username: {
    typr: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index:true,
   },

  email: {
    typr: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
   },

  fullname: {
    typr: String,
    required: true,
    trim: true,
    index:true,
   },

   avater: {
    Type: String, //cloudinary url
    required: true,
   },
   coverImage: {
        type: String, // cloudinary url
   },
   watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }
   ],

   password: {
        type: String,
        reuired: [true, "password is required"]
   },
   refreshToken:{
        type: String
   },

}, {
    timestamps: true,
}
);

export const User = mongoose.model('User', userSchema);