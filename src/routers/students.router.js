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
import { validateBody } from '../middlewares/validate-body.middleware.js';
import { createStudentSchema } from '../validation/students.schema.js';
import { isValidId } from '../middlewares/is-valid-id.middleware.js';

const router = Router();

router.get('/students', ctrlWrapper(getAllStudentsController));

router.get(
  '/students/:studentId',
  isValidId('studentId'),
  ctrlWrapper(getStudentByIdController),
);

router.post(
  '/students',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

router.delete('/students/:studentId', ctrlWrapper(deleteStudentController));

router.put(
  '/student/:studentId',
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);

router.patch(
  '/student/:studentId',
  validateBody(createStudentController),
  ctrlWrapper(patchStudentController),
);

export default router;
