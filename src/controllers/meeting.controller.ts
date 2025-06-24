import { Request, Response } from "express";
import { createMeeting, deleteMeeting, getAllMeeting, getMeetingById, updateMeeting } from '../services/meeting.service'


export const getAll = async (req: Request, res: Response) => {
    try {
        const meeting = await getAllMeeting();
        res.status(200).json(meeting);
    } catch (error) {
        console.error("Error fetching meetings:", error);
        res.status(500).json({ message: `Internal server error😣`, error });
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const meetingById = await getMeetingById(req.params.id);
        if (!meetingById) {
            res.status(404).json({ message: "Meeting not found" });
        }
        res.status(200).json(meetingById);
    }
    catch (error) {
        console.error("Error fetching Meeting by ID:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const created = await createMeeting(req.body);
        res.status(201).json(created);
    } catch (error) {
        console.error("Error creating Meeting:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const updated = await updateMeeting(req.params.id, req.body);
        if (!updated) {
            res.status(404).json({ message: "Meeting not found" });
        }
        res.status(200).json(updated);
    }
    catch (error) {
        console.error("Error updating meeting:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const deleted = await deleteMeeting(req.params.id);
        if (!deleted) {
            res.status(404).json({ message: "Meeting not found" });
        }
        res.status(200).json({ message: "Meeting deleted successfully🎉" });
    }
    catch (error) {
        console.error("Error deleting meeting:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}
