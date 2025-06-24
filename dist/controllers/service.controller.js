"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const service_service_1 = require("../services/service.service");
const getAll = async (req, res) => {
    try {
        const services = await (0, service_service_1.getAllServices)();
        res.status(200).json(services);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching services", error });
    }
};
exports.getAll = getAll;
const getById = async (req, res) => {
    try {
        const service = await (0, service_service_1.getServiceById)(req.params.id);
        if (!service)
            res.status(404).json({ message: "Service not found" });
        res.status(200).json(service);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching service", error });
    }
};
exports.getById = getById;
const create = async (req, res) => {
    try {
        const newService = await (0, service_service_1.createService)(req.body);
        res.status(201).json(newService);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating service", error });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const updated = await (0, service_service_1.updateService)(req.params.id, req.body);
        if (!updated)
            res.status(404).json({ message: "Service not found" });
        res.status(200).json(updated);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating service", error });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const deleted = await (0, service_service_1.deleteService)(req.params.id);
        if (!deleted)
            res.status(404).json({ message: "Service not found" });
        res.status(200).json({ message: "Service deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting service", error });
    }
};
exports.remove = remove;
