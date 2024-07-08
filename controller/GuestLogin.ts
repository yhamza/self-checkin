let GuestLoginModel = require('../models/GuestLogin');

module.exports = class GuestLogin {
    // CREATE - Création d'un nouveau guestLogin
    async createGuestLogin(guestLoginData) {
        try {
            let newGuestLogin = new GuestLoginModel(guestLoginData);
            let savedGuestLogin = await newGuestLogin.save();
            return savedGuestLogin;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture de tous les guestLogins
    async getAllGuestLogins() {
        try {
            let guestLogins = await GuestLoginModel.find();
            return guestLogins;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture d'un guestLogin par son ID
    async getGuestLoginById(guestLoginId) {
        try {
            let guestLogin = await GuestLoginModel.findById(guestLoginId);
            return guestLogin;
        } catch (error) {
            throw error;
        }
    }
    
    // UPDATE - Mise à jour d'un guestLogin par son ID
    async updateGuestLogin(guestLoginId, updatedData) {
        try {
            let updatedGuestLogin = await GuestLoginModel.findByIdAndUpdate(guestLoginId, updatedData, { new: true });
            return updatedGuestLogin;
        } catch (error) {
            throw error;
        }
    }
    
    // DELETE - Suppression d'un guestLogin par son ID
    async deleteGuestLogin(guestLoginId) {
        try {
            let deletedGuestLogin = await GuestLoginModel.findByIdAndDelete(guestLoginId);
            return deletedGuestLogin;
        } catch (error) {
            throw error;
        }
    }
};
