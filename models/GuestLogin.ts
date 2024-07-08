import mongoose, { Document, Schema } from 'mongoose';

// Interface pour GuestLogin
interface IGuestLogin extends Document {
    login_id: string;
    guest_id: string;
    login_code: string;
    is_active: boolean;
}

// Schéma du guest login
const guestLoginSchema: Schema<IGuestLogin> = new Schema({
    login_id: { type: String, required: true, unique: true },
    guest_id: { type: String, required: true, ref: 'Guests' },
    login_code: { type: String, required: true },
    is_active: { type: Boolean, required: true, default: true }
}, {
    timestamps: true // Ajoute createdAt et updatedAt
});

// Export du modèle de guest login
const GuestLogin = mongoose.model<IGuestLogin>('GuestLogin', guestLoginSchema);
export default GuestLogin;
