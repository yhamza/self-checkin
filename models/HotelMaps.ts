import mongoose, { Document, Schema } from 'mongoose';

// Interface pour HotelMap
interface IHotelMap extends Document {
    map_id: string;
    map_type: string;
    map_image: string;
}

// Schéma de la carte de l'hôtel
const hotelMapSchema: Schema<IHotelMap> = new Schema({
    map_id: { type: String, required: true, unique: true },
    map_type: { type: String, required: true },
    map_image: { type: String, required: true }
}, {
    timestamps: true // Ajoute createdAt et updatedAt
});

// Export du modèle de la carte de l'hôtel
const HotelMaps = mongoose.model<IHotelMap>('HotelMaps', hotelMapSchema);
export default HotelMaps;
