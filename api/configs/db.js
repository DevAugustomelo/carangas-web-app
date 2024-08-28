import mongoose from 'mongoose';
import "dotenv/config";




export async function connectDB(dataBaseName) {
    const uri = process.env.MONGODB_URI;

    try {
        await mongoose.connect(uri);
        console.log(dataBaseName + " connected");
    } catch (error) {
        console.log(error.message);        
    }
    
};