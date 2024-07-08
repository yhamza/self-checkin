import mongoose, { Document, Schema } from 'mongoose';

// Interface pour Guest
interface IGuest extends Document {
    guest_id: string;
    voucher_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    room_assigned: string;
}

// Schéma du guest
const guestSchema: Schema<IGuest> = new Schema({
    guest_id: { type: String, required: true, unique: true },
    voucher_id: { type: String, required: true, ref: 'Vouchers' },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    room_assigned: { type: String, required: true }
}, {
    timestamps: true // Ajoute createdAt et updatedAt
});

// Export du modèle de guest
const Guests = mongoose.model<IGuest>('Guests', guestSchema);
export default Guests;
