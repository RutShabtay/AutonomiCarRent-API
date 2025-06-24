"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.updateService = exports.createService = exports.getServiceById = exports.getAllServices = void 0;
const service_model_1 = __importDefault(require("../models/service.model"));
const getAllServices = async () => {
    return await service_model_1.default.find();
};
exports.getAllServices = getAllServices;
const getServiceById = async (id) => {
    return await service_model_1.default.findById(id);
};
exports.getServiceById = getServiceById;
const createService = async (newService) => {
    const service = new service_model_1.default(newService);
    return await service.save();
};
exports.createService = createService;
const updateService = async (id, serviceToUpdate) => {
    return await service_model_1.default.findByIdAndUpdate(id, serviceToUpdate, {
        new: true,
        runValidators: true
    });
};
exports.updateService = updateService;
const deleteService = async (id) => {
    return await service_model_1.default.findByIdAndDelete(id);
};
exports.deleteService = deleteService;
