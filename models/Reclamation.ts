import mongoose, { Document, Schema } from 'mongoose';

// Interface pour Reclamation
interface IReclamation extends Document {
    reclamation_id: string;
    guest_id: string;
    category: string;
    message: string;
    submitted_at: Date;
}

// Schéma de la réclamation
const reclamationSchema: Schema<IReclamation> = new Schema({
    reclamation_id: { type: String, required: true, unique: true },
    guest_id: { type: String, required: true, ref: 'Guests' },
    category: { type: String, required: true },
    message: { type: String, required: true },
    submitted_at: { type: Date, required: true }
}, {
    timestamps: true // Ajoute createdAt et updatedAt
});

// Export du modèle de réclamation
const Reclamations = mongoose.model<IReclamation>('Reclamations', reclamationSchema);
export default Reclamations;
