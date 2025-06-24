"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const user_service_1 = require("../services/user.service");
const getAll = async (req, res) => {
    try {
        const users = await (0, user_service_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        console.error("Error fetching Users:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.getAll = getAll;
const getById = async (req, res) => {
    try {
        const usersById = await (0, user_service_1.getUserById)(req.params.id);
        if (!usersById) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(usersById);
    }
    catch (error) {
        console.error("Error fetching user by ID:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.getById = getById;
const create = async (req, res) => {
    try {
        const created = await (0, user_service_1.createUser)(req.body);
        res.status(201).json(created);
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const updated = await (0, user_service_1.updateUser)(req.params.id, req.body);
        if (!updated) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updated);
    }
    catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const deleted = await (0, user_service_1.deleteUser)(req.params.id);
        if (!deleted) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully🎉" });
    }
    catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.remove = remove;
