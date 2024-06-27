
import mongoose from 'mongoose';

let cached = (global as any).mongoose || {connection: null, Promise: null};

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDatabase = async () => {
    if (cached.connection) {
        return cached.connection;
    }

    if(!MONGODB_URI) {
        throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }

    cached.Promise = cached.Promise || mongoose.connect(MONGODB_URI, {
        dbName: 'evnetilo',
        bufferCommands: false,
    });

    cached.connection = await cached.Promise;

    return cached.connection;

}