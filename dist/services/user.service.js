"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const getAllUsers = async () => {
    return await user_model_1.default.find();
};
exports.getAllUsers = getAllUsers;
const getUserById = async (id) => {
    return await user_model_1.default.findById(id);
};
exports.getUserById = getUserById;
const createUser = async (newUser) => {
    const user = new user_model_1.default(newUser);
    return await user.save();
};
exports.createUser = createUser;
const updateUser = async (id, userToUpdate) => {
    return await user_model_1.default.findByIdAndUpdate(id, userToUpdate, {
        new: true,
        runValidators: true
    });
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    return await user_model_1.default.findByIdAndDelete(id);
};
exports.deleteUser = deleteUser;
