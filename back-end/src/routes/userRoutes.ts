import express, { Router } from 'express';
import {
  createUserController,
  endShiftController,
  getUserDataController,
  startShiftController,
} from '../controllers/userController';

const router: Router = express.Router();

router.post('/create', createUserController);
router.post('/startShift', startShiftController);
router.post('/endShift', endShiftController);
router.get('/get/:userCode', getUserDataController);

export default router;
