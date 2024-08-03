import { Router } from 'express';
import { createSchedule } from '../controllers/schedule-controller';

const router = Router();

router.post('/horarios', createSchedule);

export default router;