import express from 'express';
import { getDishes, getDishById, createDish, updateDish, deleteDish } from '../controllers/dishes.controller.js';

const router = express.Router();

router.get('/', getDishes);
router.get('/get/:id', getDishById);
router.post('/create', createDish);
router.put('/update/:id', updateDish);
router.delete('/delete/:id', deleteDish);

export default router;