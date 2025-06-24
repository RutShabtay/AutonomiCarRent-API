import mongoose, { Document, Schema } from "mongoose";

export interface IBusiness extends Document {
    name: string;
    ownerName: string;
    phone: string;
    email?: string;
    address?: string;
    description?: string;
    createdAt?: Date;
}

const businessSchema = new Schema<IBusiness>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    ownerName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
        trim: true
    },
    address: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: false
    }
});

export default mongoose.model<IBusiness>('Business', businessSchema);
