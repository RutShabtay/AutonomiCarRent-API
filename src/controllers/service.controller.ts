import { Request, Response } from "express";
import {
    getAllServices,
    getServiceById,
    createService,
    updateService,
    deleteService
} from '../services/service.service'

export const getAll = async (req: Request, res: Response) => {
    try {
        const services = await getAllServices();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: "Error fetching services", error });
    }
};

export const getById = async (req: Request, res: Response) => {
    try {
        const service = await getServiceById(req.params.id);
        if (!service) res.status(404).json({ message: "Service not found" });
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: "Error fetching service", error });
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const newService = await createService(req.body);
        res.status(201).json(newService);
    } catch (error) {
        res.status(500).json({ message: "Error creating service", error });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const updated = await updateService(req.params.id, req.body);
        if (!updated) res.status(404).json({ message: "Service not found" });
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: "Error updating service", error });
    }
};

export const remove = async (req: Request, res: Response) => {
    try {
        const deleted = await deleteService(req.params.id);
        if (!deleted) res.status(404).json({ message: "Service not found" });
        res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting service", error });
    }
};
