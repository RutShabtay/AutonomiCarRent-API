"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("../controllers/service.controller");
const router = express_1.default.Router();
router.get("/", service_controller_1.getAll);
router.get("/:id", service_controller_1.getById);
router.post("/", service_controller_1.create);
router.put("/:id", service_controller_1.update);
router.delete("/:id", service_controller_1.remove);
exports.default = router;
