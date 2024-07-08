import mongoose, { Document, Schema } from 'mongoose';

// Interface pour Service
interface IService extends Document {
    service_id: string;
    service_name: string;
    description: string;
    price: number;
    available_from: Date;
    available_to: Date;
}

// Schéma du service
const serviceSchema: Schema<IService> = new Schema({
    service_id: { type: String, required: true, unique: true },
    service_name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    available_from: { type: Date, required: true },
    available_to: { type: Date, required: true }
}, {
    timestamps: true // Ajoute createdAt et updatedAt
});

// Export du modèle de service
const Services = mongoose.model<IService>('Services', serviceSchema);
export default Services;
