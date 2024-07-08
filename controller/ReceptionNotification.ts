let ReceptionNotificationModel = require('../models/ReceptionNotification');

module.exports = class ReceptionNotification {
    // CREATE - Création d'un nouveau ReceptionNotification
    async createReceptionNotification(ReceptionNotificationData) {
        try {
            let newReceptionNotification = new ReceptionNotificationModel(ReceptionNotificationData);
            let savedReceptionNotification = await newReceptionNotification.save();
            return savedReceptionNotification;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture de tous les ReceptionNotifications
    async getAllReceptionNotifications() {
        try {
            let ReceptionNotifications = await ReceptionNotificationModel.find();
            return ReceptionNotifications;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture d'un ReceptionNotification par son ID
    async getReceptionNotificationById(ReceptionNotificationId) {
        try {
            let ReceptionNotification = await ReceptionNotificationModel.findById(ReceptionNotificationId);
            return ReceptionNotification;
        } catch (error) {
            throw error;
        }
    }
    
    // UPDATE - Mise à jour d'un ReceptionNotification par son ID
    async updateReceptionNotification(ReceptionNotificationId, updatedData) {
        try {
            let updatedReceptionNotification = await ReceptionNotificationModel.findByIdAndUpdate(ReceptionNotificationId, updatedData, { new: true });
            return updatedReceptionNotification;
        } catch (error) {
            throw error;
        }
    }
    
    // DELETE - Suppression d'un ReceptionNotification par son ID
    async deleteReceptionNotification(ReceptionNotificationId) {
        try {
            let deletedReceptionNotification = await ReceptionNotificationModel.findByIdAndDelete(ReceptionNotificationId);
            return deletedReceptionNotification;
        } catch (error) {
            throw error;
        }
    }
};
