import mongoose, { Document, Schema } from 'mongoose';

// Interface pour Voucher
interface IVoucher extends Document {
    voucher_id: string;
    checkin_date: Date;
    checkout_date: Date;
    total_price: number;
    guests_number: number;
    rooms_number: number;
    rooms_categories: {
        [key: string]: any;
    };
}

// Schéma du voucher
const voucherSchema: Schema<IVoucher> = new Schema({
    voucher_id: { type: String, required: true, unique: true },
    checkin_date: { type: Date, required: true },
    checkout_date: { type: Date, required: true },
    total_price: { type: Number, required: true },
    guests_number: { type: Number, required: true },
    rooms_number: { type: Number, required: true },
    rooms_categories: { type: Schema.Types.Mixed, required: true }
}, {
    timestamps: true // Ajoute createdAt et updatedAt
});

// Export du modèle de voucher
const Vouchers = mongoose.model<IVoucher>('Vouchers', voucherSchema);
export default Vouchers;
