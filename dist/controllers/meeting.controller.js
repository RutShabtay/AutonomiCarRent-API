"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const meeting_service_1 = require("../services/meeting.service");
const getAll = async (req, res) => {
    try {
        const meeting = await (0, meeting_service_1.getAllMeeting)();
        res.status(200).json(meeting);
    }
    catch (error) {
        console.error("Error fetching meetings:", error);
        res.status(500).json({ message: `Internal server error😣`, error });
    }
};
exports.getAll = getAll;
const getById = async (req, res) => {
    try {
        const meetingById = await (0, meeting_service_1.getMeetingById)(req.params.id);
        if (!meetingById) {
            res.status(404).json({ message: "Meeting not found" });
        }
        res.status(200).json(meetingById);
    }
    catch (error) {
        console.error("Error fetching Meeting by ID:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.getById = getById;
const create = async (req, res) => {
    try {
        const created = await (0, meeting_service_1.createMeeting)(req.body);
        res.status(201).json(created);
    }
    catch (error) {
        console.error("Error creating Meeting:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const updated = await (0, meeting_service_1.updateMeeting)(req.params.id, req.body);
        if (!updated) {
            res.status(404).json({ message: "Meeting not found" });
        }
        res.status(200).json(updated);
    }
    catch (error) {
        console.error("Error updating meeting:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const deleted = await (0, meeting_service_1.deleteMeeting)(req.params.id);
        if (!deleted) {
            res.status(404).json({ message: "Meeting not found" });
        }
        res.status(200).json({ message: "Meeting deleted successfully🎉" });
    }
    catch (error) {
        console.error("Error deleting meeting:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.remove = remove;
