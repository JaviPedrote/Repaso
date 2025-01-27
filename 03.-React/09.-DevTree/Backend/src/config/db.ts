import mongoose from 'mongoose';

export const connectDB =async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.DB);
        const url = `${connection.host}$: ${connection.port}`
        console.log('DB is connected to:', url);
    } catch (error) {
        console.log('Error connecting to DB');
        console.log(error.message);
        process.exit(1);
        }
}