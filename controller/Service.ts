let ServiceModel = require('../models/HotelMaps');

module.exports = class Service {
    // CREATE - Création d'un nouveau Service
    async createHotelMaps(HotelMapsData) {
        try {
            let newHotelMaps = new ServiceModel(HotelMapsData);
            let savedHotelMaps = await newHotelMaps.save();
            return savedHotelMaps;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture de tous les Services
    async getAllHotelMapss() {
        try {
            let Services = await ServiceModel.find();
            return Services;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture d'un Service par son ID
    async getHotelMapsById(HotelMapsId) {
        try {
            let Service = await ServiceModel.findById(HotelMapsId);
            return Service;
        } catch (error) {
            throw error;
        }
    }
    
    // UPDATE - Mise à jour d'un Service par son ID
    async updateHotelMaps(HotelMapsId, updatedData) {
        try {
            let updatedHotelMaps = await ServiceModel.findByIdAndUpdate(HotelMapsId, updatedData, { new: true });
            return updatedHotelMaps;
        } catch (error) {
            throw error;
        }
    }
    
    // DELETE - Suppression d'un Service par son ID
    async deleteHotelMaps(HotelMapsId) {
        try {
            let deletedHotelMaps = await ServiceModel.findByIdAndDelete(HotelMapsId);
            return deletedHotelMaps;
        } catch (error) {
            throw error;
        }
    }
};
