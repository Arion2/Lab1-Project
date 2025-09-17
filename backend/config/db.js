import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://foodDel:foodDel@cluster0.hgtu2ep.mongodb.net/lab1-project').then(()=>console.log('DB connected'));
}