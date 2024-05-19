import express from 'express';
import { getRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } from '../controllers/restaurant.controller.js';

const router = express.Router();

router.get('/', getRestaurants);
router.get('/get/:id', getRestaurantById);
router.post('/create', createRestaurant);
router.put('/update/:id', updateRestaurant);
router.delete('/delete/:id', deleteRestaurant);

export default router;