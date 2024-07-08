let GuestModel = require('../models/Guest');

module.exports = class Guest {
    // CREATE - Création d'un nouveau guest
    async createGuest(guestData) {
        try {
            let newGuest = new GuestModel(guestData);
            let savedGuest = await newGuest.save();
            return savedGuest;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture de tous les guests
    async getAllGuests() {
        try {
            let guests = await GuestModel.find();
            return guests;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture d'un guest par son ID
    async getGuestById(guestId) {
        try {
            let guest = await GuestModel.findById(guestId);
            return guest;
        } catch (error) {
            throw error;
        }
    }
    
    // UPDATE - Mise à jour d'un guest par son ID
    async updateGuest(guestId, updatedData) {
        try {
            let updatedGuest = await GuestModel.findByIdAndUpdate(guestId, updatedData, { new: true });
            return updatedGuest;
        } catch (error) {
            throw error;
        }
    }
    
    // DELETE - Suppression d'un guest par son ID
    async deleteGuest(guestId) {
        try {
            let deletedGuest = await GuestModel.findByIdAndDelete(guestId);
            return deletedGuest;
        } catch (error) {
            throw error;
        }
    }
};
