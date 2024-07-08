let GuestPurchaseModel = require('../models/GuestPurchase');

module.exports = class GuestPurchase {
    // CREATE - Création d'un nouveau guestPurchase
    async createGuestPurchase(guestPurchaseData) {
        try {
            let newGuestPurchase = new GuestPurchaseModel(guestPurchaseData);
            let savedGuestPurchase = await newGuestPurchase.save();
            return savedGuestPurchase;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture de tous les guestPurchases
    async getAllGuestPurchases() {
        try {
            let guestPurchases = await GuestPurchaseModel.find();
            return guestPurchases;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture d'un guestPurchase par son ID
    async getGuestPurchaseById(guestPurchaseId) {
        try {
            let guestPurchase = await GuestPurchaseModel.findById(guestPurchaseId);
            return guestPurchase;
        } catch (error) {
            throw error;
        }
    }
    
    // UPDATE - Mise à jour d'un guestPurchase par son ID
    async updateGuestPurchase(guestPurchaseId, updatedData) {
        try {
            let updatedGuestPurchase = await GuestPurchaseModel.findByIdAndUpdate(guestPurchaseId, updatedData, { new: true });
            return updatedGuestPurchase;
        } catch (error) {
            throw error;
        }
    }
    
    // DELETE - Suppression d'un guestPurchase par son ID
    async deleteGuestPurchase(guestPurchaseId) {
        try {
            let deletedGuestPurchase = await GuestPurchaseModel.findByIdAndDelete(guestPurchaseId);
            return deletedGuestPurchase;
        } catch (error) {
            throw error;
        }
    }
};
