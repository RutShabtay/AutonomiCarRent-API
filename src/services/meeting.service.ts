import Meeting, { IMeeting } from "../models/meeting.model";

export const getAllMeeting = async (): Promise<IMeeting[]> => {
    return await Meeting.find()
};

export const getMeetingById = async (id: string): Promise<IMeeting | null> => {
    return await Meeting.findById(id);
}


export const createMeeting = async (IMeeting: IMeeting): Promise<IMeeting | null> => {
    const meeting = new Meeting(IMeeting);
    return await meeting.save();
}

export const updateMeeting = async (id: string, meetingToUpdate: IMeeting): Promise<IMeeting | null> => {

    return await Meeting.findByIdAndUpdate(
        id,
        meetingToUpdate,
        { new: true, runValidators: true }
    );
}


export const deleteMeeting = async (id: string): Promise<IMeeting | null> => {
    return await Meeting.findByIdAndDelete(id);
};