import express from "express";
import { getRandomDishes } from "../controllers/dishes.controller.js";

const router = express.Router();

router.get("/random-dishes/:categoryId", getRandomDishes);

export default router;
