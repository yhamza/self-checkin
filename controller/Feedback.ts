let FeedbackModel = require('../models/Feedback');

module.exports = class Feedback {
    // CREATE - Création d'un nouveau feedback
    async createFeedback(req, res, next) {
        try {
            let newFeedback = new FeedbackModel(req.body);
            let savedFeedback = await newFeedback.save();
            return savedFeedback;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture de tous les feedbacks
    async getAllFeedbacks(req, res, next) {
        try {
            let feedbacks = await FeedbackModel.find();
            return feedbacks;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture d'un feedback par son ID
    async getFeedbackById(req, res, next) {
        try {
            let feedback = await FeedbackModel.findById(req.params.id);
            return feedback;
        } catch (error) {
            throw error;
        }
    }
    
    // UPDATE - Mise à jour d'un feedback par son ID
    async updateFeedback(req, res, next) {
        try {
            let updatedFeedback = await FeedbackModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return updatedFeedback;
        } catch (error) {
            throw error;
        }
    }
    
    // DELETE - Suppression d'un feedback par son ID
    async deleteFeedback(req, res, next) {
        try {
            let deletedFeedback = await FeedbackModel.findByIdAndDelete(req.params.id);
            return deletedFeedback;
        } catch (error) {
            throw error;
        }
    }
};
