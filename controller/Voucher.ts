let VoucherModel = require('../models/Voucher');

module.exports = class Voucher {
    // CREATE - Création d'un nouveau Voucher
    async createVoucher(VoucherData) {
        try {
            let newVoucher = new VoucherModel(VoucherData);
            let savedVoucher = await newVoucher.save();
            return savedVoucher;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture de tous les Vouchers
    async getAllVouchers() {
        try {
            let Vouchers = await VoucherModel.find();
            return Vouchers;
        } catch (error) {
            throw error;
        }
    }
    
    // READ - Lecture d'un Voucher par son ID
    async getVoucherById(VoucherId) {
        try {
            let Voucher = await VoucherModel.findById(VoucherId);
            return Voucher;
        } catch (error) {
            throw error;
        }
    }
    
    // UPDATE - Mise à jour d'un Voucher par son ID
    async updateVoucher(VoucherId, updatedData) {
        try {
            let updatedVoucher = await VoucherModel.findByIdAndUpdate(VoucherId, updatedData, { new: true });
            return updatedVoucher;
        } catch (error) {
            throw error;
        }
    }
    
    // DELETE - Suppression d'un Voucher par son ID
    async deleteVoucher(VoucherId) {
        try {
            let deletedVoucher = await VoucherModel.findByIdAndDelete(VoucherId);
            return deletedVoucher;
        } catch (error) {
            throw error;
        }
    }
};
