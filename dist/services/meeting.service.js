"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMeeting = exports.updateMeeting = exports.createMeeting = exports.getMeetingById = exports.getAllMeeting = void 0;
const meeting_model_1 = __importDefault(require("../models/meeting.model"));
const getAllMeeting = async () => {
    return await meeting_model_1.default.find();
};
exports.getAllMeeting = getAllMeeting;
const getMeetingById = async (id) => {
    return await meeting_model_1.default.findById(id);
};
exports.getMeetingById = getMeetingById;
const createMeeting = async (IMeeting) => {
    const meeting = new meeting_model_1.default(IMeeting);
    return await meeting.save();
};
exports.createMeeting = createMeeting;
const updateMeeting = async (id, meetingToUpdate) => {
    return await meeting_model_1.default.findByIdAndUpdate(id, meetingToUpdate, { new: true, runValidators: true });
};
exports.updateMeeting = updateMeeting;
const deleteMeeting = async (id) => {
    return await meeting_model_1.default.findByIdAndDelete(id);
};
exports.deleteMeeting = deleteMeeting;
