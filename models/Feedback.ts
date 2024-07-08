import mongoose, { Document, Schema } from 'mongoose';

// Interface pour Feedback
interface IFeedback extends Document {
    feedback_id: string;
    guest_id: string;
    stars: number;
    message: string;
    submitted_at: Date;
}

// Schéma du feedback
const feedbackSchema: Schema<IFeedback> = new Schema({
    feedback_id: { type: String, required: true, unique: true },
    guest_id: { type: String, required: true, ref: 'Guests' },
    stars: { type: Number, required: true },
    message: { type: String, required: true },
    submitted_at: { type: Date, required: true }
}, {
    timestamps: true // Ajoute createdAt et updatedAt
});

// Export du modèle de feedback
const Feedback = mongoose.model<IFeedback>('Feedback', feedbackSchema);
export default Feedback;
