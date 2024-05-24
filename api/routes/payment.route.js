import express from 'express';
import { createPayment , payOs} from '../controllers/payment-controller.js';

const router = express.Router();

router.post('/payOs', payOs);
router.post('/create-payment', createPayment);

export default router;