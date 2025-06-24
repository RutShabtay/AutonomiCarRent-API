"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBusiness = exports.updateBusiness = exports.createBusiness = exports.getBusinessById = exports.getAllBusinesses = void 0;
const business_model_1 = __importDefault(require("../models/business.model"));
const getAllBusinesses = async () => {
    return await business_model_1.default.find();
};
exports.getAllBusinesses = getAllBusinesses;
const getBusinessById = async (id) => {
    return await business_model_1.default.findById(id);
};
exports.getBusinessById = getBusinessById;
const createBusiness = async (newBusiness) => {
    const business = new business_model_1.default(newBusiness);
    return await business.save();
};
exports.createBusiness = createBusiness;
const updateBusiness = async (id, businessToUpdate) => {
    return await business_model_1.default.findByIdAndUpdate(id, businessToUpdate, { new: true, runValidators: true });
};
exports.updateBusiness = updateBusiness;
const deleteBusiness = async (id) => {
    return await business_model_1.default.findByIdAndDelete(id);
};
exports.deleteBusiness = deleteBusiness;
