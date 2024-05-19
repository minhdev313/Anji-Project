import express from 'express';
import { getCatagory, getCatagoryById, createCatagory, updateCatagory, deleteCatagory } from '../controllers/category.controller.js';

const router = express.Router();

router.get('/', getCatagory);
router.get('/get/:id', getCatagoryById);
router.post('/create', createCatagory);
router.put('/update/:id', updateCatagory);
router.delete('/delete/:id', deleteCatagory);

export default router;