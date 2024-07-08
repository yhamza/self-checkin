import mongoose, { Document, Schema } from 'mongoose';

// Interface pour GuestPurchase
interface IGuestPurchase extends Document {
    purchase_id: string;
    guest_id: string;
    service_id: string;
    purchase_date: Date;
    amount: number;
}

// Schéma du guest purchase
const guestPurchaseSchema: Schema<IGuestPurchase> = new Schema({
    purchase_id: { type: String, required: true, unique: true },
    guest_id: { type: String, required: true, ref: 'Guests' },
    service_id: { type: String, required: true, ref: 'Services' },
    purchase_date: { type: Date, required: true },
    amount: { type: Number, required: true }
}, {
    timestamps: true // Ajoute createdAt et updatedAt
});

// Export du modèle de guest purchase
const GuestPurchases = mongoose.model<IGuestPurchase>('GuestPurchases', guestPurchaseSchema);
export default GuestPurchases;
