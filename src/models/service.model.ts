import mongoose, { Document, Schema } from "mongoose";

export interface IService extends Document {
    name: string;
    price: number;
    duration: number; // in minutes
    description?: string;
}

const serviceSchema = new Schema<IService>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    description: { type: String }
});

export default mongoose.model<IService>("Service", serviceSchema);
