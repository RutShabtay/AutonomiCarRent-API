import mongoose, { Document, Schema } from "mongoose";

export interface IMeeting extends Document {
    title: string;
    date: Date;
    location?: string;
    participants?: string[];
    description?: string;
    createdAt?: Date;
}

const meetingSchema = new Schema<IMeeting>({
    title: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: false,
        trim: true
    },
    participants: {
        type: [String],
        required: false,
        default: []
    },
    description: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<IMeeting>('Meeting', meetingSchema);
