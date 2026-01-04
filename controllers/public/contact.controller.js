import Message from '../../models/message.model.js';
import AppError from '../../utils/app-error.js';
import logger from '../../utils/logger.js';

/**
 * Envoie un message de contact
 * @route POST /api/public/contact
 */
export const sendContactMessage = async (req, res, next) => {
  try {
    const { nom, email, sujet, message } = req.body;

    // Créer le message en base
    const newMessage = new Message({
      nom,
      email,
      sujet,
      message,
      statut: 'non_lu',
      date_envoi: new Date()
    });

    await newMessage.save();

    logger.info({ messageId: newMessage._id, email }, 'Nouveau message de contact reçu');

    res.status(201).json({
      status: 'success',
      message: 'Votre message a été envoyé avec succès. Nous vous répondrons bientôt.',
      data: {
        id: newMessage._id
      }
    });
  } catch (err) {
    logger.error({ err }, 'Error in sendContactMessage');
    return next(new AppError(500, err.message));
  }
};

export default { sendContactMessage };