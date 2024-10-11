import createHttpError from 'http-errors';

import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from '../services/students.service.js';

export const getAllStudentsController = async (_req, res) => {
  const students = await getAllStudents();
  res.status(200).json({
    status: 200,
    message: 'Successfully got students!',
    data: students,
  });
};

export const getStudentByIdController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);

  if (!student) throw createHttpError(404, 'Student not found');

  res.status(200).json({
    status: 200,
    message: 'Successfully got student!',
    data: student,
  });
};

export const createStudentController = async (req, res) => {
  const student = await createStudent(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created student!',
    data: student,
  });
};

export const deleteStudentController = async (req, res, next) => {
  const { studentId } = req.params;

  const student = await deleteStudent(studentId);

  if (!student) throw createHttpError(404, 'Student not found');

  res.status(204).json({
    status: 204,
    message: 'Successfully deleted student!',
  });
};

export const upsertStudentController = async (req, res, next) => {
  const { studentId } = req.params;
  const result = await updateStudent(studentId, req.body, {
    upsert: true,
  });

  if (!result) throw createHttpError(404, 'Student not found');

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status: status,
    message: 'Student suc        cessfully upserted!',
    data: result.student,
  });
};

export const patchStudentController = async (req, res, next) => {
  const { studentId } = req.params;
  const result = await updateStudent(studentId, req.body, {});

  if (!result) throw createHttpError(404, 'Student not found');

  res.status(200).json({
    status: 200,
    message: 'Successfully patched student',
    data: result.student,
  });
};
