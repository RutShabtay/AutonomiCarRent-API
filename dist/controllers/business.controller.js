"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const business_service_1 = require("../services/business.service");
const getAll = async (req, res) => {
    try {
        const business = await (0, business_service_1.getAllBusinesses)();
        res.status(200).json(business);
    }
    catch (error) {
        console.error("Error fetching businesses:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.getAll = getAll;
const getById = async (req, res) => {
    try {
        const businessById = await (0, business_service_1.getBusinessById)(req.params.id);
        if (!businessById) {
            res.status(404).json({ message: "Business not found" });
        }
        res.status(200).json(businessById);
    }
    catch (error) {
        console.error("Error fetching business by ID:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.getById = getById;
const create = async (req, res) => {
    try {
        const created = await (0, business_service_1.createBusiness)(req.body);
        res.status(201).json(created);
    }
    catch (error) {
        console.error("Error creating business:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const updated = await (0, business_service_1.updateBusiness)(req.params.id, req.body);
        if (!updated) {
            res.status(404).json({ message: "Business not found" });
        }
        res.status(200).json(updated);
    }
    catch (error) {
        console.error("Error updating business:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const deleted = await (0, business_service_1.deleteBusiness)(req.params.id);
        if (!deleted) {
            res.status(404).json({ message: "Business not found" });
        }
        res.status(200).json({ message: "Business deleted successfully🎉" });
    }
    catch (error) {
        console.error("Error deleting business:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
};
exports.remove = remove;
