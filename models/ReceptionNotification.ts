import mongoose, { Document, Schema } from 'mongoose';

// Interface pour ReceptionNotification
interface IReceptionNotification extends Document {
    notification_id: string;
    voucher_id: string;
    status: string;
    message: string;
    notification_time: Date;
}

// Schéma de la reception notification
const receptionNotificationSchema: Schema<IReceptionNotification> = new Schema({
    notification_id: { type: String, required: true, unique: true },
    voucher_id: { type: String, required: true, ref: 'Vouchers' },
    status: { type: String, required: true },
    message: { type: String, required: true },
    notification_time: { type: Date, required: true }
}, {
    timestamps: true // Ajoute createdAt et updatedAt
});

// Export du modèle de reception notification
const ReceptionNotifications = mongoose.model<IReceptionNotification>('ReceptionNotifications', receptionNotificationSchema);
export default ReceptionNotifications;
