import mongoose, { Document, Schema } from 'mongoose';

// Interface pour Room
interface IRoom extends Document {
    room_id: string;
    voucher_id: string;
    room_type: string;
    guest_id?: string; // Nullable si pas encore assigné
}

// Schéma du room
const roomSchema: Schema<IRoom> = new Schema({
    room_id: { type: String, required: true, unique: true },
    voucher_id: { type: String, required: true, ref: 'Vouchers' },
    room_type: { type: String, required: true },
    guest_id: { type: String, ref: 'Guests', default: null } // Nullable si pas encore assigné
}, {
    timestamps: true // Ajoute createdAt et updatedAt
});

// Export du modèle de room
const Rooms = mongoose.model<IRoom>('Rooms', roomSchema);
export default Rooms;
