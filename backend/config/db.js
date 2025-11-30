import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ankit:foodie@cluster0.e1t5oig.mongodb.net/?appName=Cluster0')
        .then(() => console.log("DB Connected"));



}