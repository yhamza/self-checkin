let RoomModel = require('../models/Room');

module.exports = class Room {
    // CREATE - Création d'un nouveau Room
    async createRoom(RoomData) {
        try {
            let newRoom = new RoomModel(RoomData);
            let savedRoom = await newRoom.save();
            return savedRoom;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture de tous les Rooms
    async getAllRooms() {
        try {
            let Rooms = await RoomModel.find();
            return Rooms;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture d'un Room par son ID
    async getRoomById(RoomId) {
        try {
            let Room = await RoomModel.findById(RoomId);
            return Room;
        } catch (error) {
            throw error;
        }
    }
    
    // UPDATE - Mise à jour d'un Room par son ID
    async updateRoom(RoomId, updatedData) {
        try {
            let updatedRoom = await RoomModel.findByIdAndUpdate(RoomId, updatedData, { new: true });
            return updatedRoom;
        } catch (error) {
            throw error;
        }
    }
    
    // DELETE - Suppression d'un Room par son ID
    async deleteRoom(RoomId) {
        try {
            let deletedRoom = await RoomModel.findByIdAndDelete(RoomId);
            return deletedRoom;
        } catch (error) {
            throw error;
        }
    }
};
