import { Router } from 'express';

import {
  createStudentController,
  deleteStudentController,
  getAllStudentsController,
  getStudentByIdController,
  upsertStudentController,
  patchStudentController,
} from '../controllers/students.controller.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/students', ctrlWrapper(getAllStudentsController));
router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));
router.post('/students', ctrlWrapper(createStudentController));
router.delete('/students/:studentId', ctrlWrapper(deleteStudentController));
router.put('/student/:studentId', ctrlWrapper(upsertStudentController));
router.patch('/student/:studentId', ctrlWrapper(patchStudentController));

export default router;
