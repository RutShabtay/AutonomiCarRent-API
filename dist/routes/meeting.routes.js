"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const meeting_controller_1 = require("../controllers/meeting.controller");
const router = express_1.default.Router();
router.get("/", meeting_controller_1.getAll);
router.get("/:id", meeting_controller_1.getById);
router.post("/", meeting_controller_1.create);
router.put("/:id", meeting_controller_1.update);
router.delete("/:id", meeting_controller_1.remove);
exports.default = router;
