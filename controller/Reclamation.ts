let ReclamationModel = require('../models/Reclamation');

module.exports = class Reclamation {
    // CREATE - Création d'un nouveau Reclamation
    async createReclamation(ReclamationData) {
        try {
            let newReclamation = new ReclamationModel(ReclamationData);
            let savedReclamation = await newReclamation.save();
            return savedReclamation;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture de tous les Reclamations
    async getAllReclamations() {
        try {
            let Reclamations = await ReclamationModel.find();
            return Reclamations;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture d'un Reclamation par son ID
    async getReclamationById(ReclamationId) {
        try {
            let Reclamation = await ReclamationModel.findById(ReclamationId);
            return Reclamation;
        } catch (error) {
            throw error;
        }
    }
    
    // UPDATE - Mise à jour d'un Reclamation par son ID
    async updateReclamation(ReclamationId, updatedData) {
        try {
            let updatedReclamation = await ReclamationModel.findByIdAndUpdate(ReclamationId, updatedData, { new: true });
            return updatedReclamation;
        } catch (error) {
            throw error;
        }
    }
    
    // DELETE - Suppression d'un Reclamation par son ID
    async deleteReclamation(ReclamationId) {
        try {
            let deletedReclamation = await ReclamationModel.findByIdAndDelete(ReclamationId);
            return deletedReclamation;
        } catch (error) {
            throw error;
        }
    }
};
