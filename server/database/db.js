import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connections = async ()=>{   

    try{
        await  mongoose.connect(process.env.DB_URI);
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    }
    catch(error){
        console.error('Error connecting to MongoDB', error);     
    }
}

export default connections;