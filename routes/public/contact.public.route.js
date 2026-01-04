import express from 'express';
import { sendContactMessage } from '../../controllers/public/contact.controller.js';
import { contactValidationRules, validate } from '../../middlewares/validator.js';

const router = express.Router();

// POST /api/public/contact
router.post('/contact', contactValidationRules(), validate, sendContactMessage);

export default router;