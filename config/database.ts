import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || '');
        console.log(`Conexão criada: ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`Erro: ${error.message}`);
        console.log(process.env.MONGO_URI);
        process.exit(1);
    }
};

export default dbConnection;