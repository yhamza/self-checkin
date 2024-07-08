let HotelMapsModel = require('../models/HotelMaps');

module.exports = class HotelMaps {
    // CREATE - Création d'un nouveau HotelMaps
    async createHotelMaps(HotelMapsData) {
        try {
            let newHotelMaps = new HotelMapsModel(HotelMapsData);
            let savedHotelMaps = await newHotelMaps.save();
            return savedHotelMaps;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture de tous les HotelMapss
    async getAllHotelMapss() {
        try {
            let HotelMapss = await HotelMapsModel.find();
            return HotelMapss;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture d'un HotelMaps par son ID
    async getHotelMapsById(HotelMapsId) {
        try {
            let HotelMaps = await HotelMapsModel.findById(HotelMapsId);
            return HotelMaps;
        } catch (error) {
            throw error;
        }
    }
    
    // UPDATE - Mise à jour d'un HotelMaps par son ID
    async updateHotelMaps(HotelMapsId, updatedData) {
        try {
            let updatedHotelMaps = await HotelMapsModel.findByIdAndUpdate(HotelMapsId, updatedData, { new: true });
            return updatedHotelMaps;
        } catch (error) {
            throw error;
        }
    }
    
    // DELETE - Suppression d'un HotelMaps par son ID
    async deleteHotelMaps(HotelMapsId) {
        try {
            let deletedHotelMaps = await HotelMapsModel.findByIdAndDelete(HotelMapsId);
            return deletedHotelMaps;
        } catch (error) {
            throw error;
        }
    }
};
