import express from 'express';
import { requireAdminAuth } from '../../middlewares/auth.js';
import { getProfile, updateProfile, deletePhoto, deleteSocial } from '../../controllers/admin/profile.admin.controller.js';
import { profileValidationRules, validate } from '../../middlewares/validator.js';
import { uploadSingleImage } from '../../middlewares/upload.js';

const router = express.Router();

router.get('/profil', requireAdminAuth, getProfile);
router.put('/profil', requireAdminAuth, uploadSingleImage, profileValidationRules(), validate, updateProfile);
router.delete('/profil/photo', requireAdminAuth, deletePhoto);
router.delete('/profil/socials/:network', requireAdminAuth, deleteSocial);

export default router;