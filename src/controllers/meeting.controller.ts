import logger from '../logs/logger';
import { Request, Response } from "express";
import { createMeeting, deleteMeeting, getAllMeeting, getMeetingById, updateMeeting } from '../services/meeting.service'


export const getAll = async (req: Request, res: Response) => {
    try {
        const meeting = await getAllMeeting();
        logger.info("getAll meeting got successfully---");
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
            logger.info("Error(404) Meeting not found");
            res.status(404).json({ message: "Meeting not found" });
        }
        logger.info("getById meeting got successfully---");
        res.status(200).json(meetingById);
    }
    catch (error) {
        console.error("Error fetching Meeting by ID:", error);
        logger.info("Error(500) fetching Meeting by ID");
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const created = await createMeeting(req.body);
        logger.info("create meeting got successfully---");
        res.status(201).json(created);

    } catch (error: any) {

        if (error.statusCode === 400) {
            logger.info("Error(400) meeting already exists");
            res.status(400).json({ message: error.message });
        }
        console.error("Error creating Meeting:", error);
        logger.info("Error(500) creating Meeting");
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const updated = await updateMeeting(req.params.id, req.body);
        if (!updated) {
            res.status(404).json({ message: "Meeting not found" });
        }
        logger.info("update meeting got successfully---");
        res.status(200).json(updated);
    }
    catch (error) {
        console.error("Error updating meeting:", error);
        logger.info("Error(500) update Meeting");
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const deleted = await deleteMeeting(req.params.id);
        if (!deleted) {
            logger.info("Error(404) meeting not found.");
            res.status(404).json({ message: "Meeting not found" });
        }
        logger.info("remove meeting got successfully---");
        res.status(200).json({ message: "Meeting deleted successfully🎉" });
    }
    catch (error) {
        console.error("Error deleting meeting:", error);
        logger.info("Error(500) deleting meeting");
        res.status(500).json({ message: "Internal server error😣", error });
    }
}
