import express from 'express';
import {
  test,
  updateUser,
  deleteUser,
  updateLevelToPremium,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.post('/level/:id', updateLevelToPremium);

export default router;
