const express=require('express');

import FeedbackRouter from './Feedback';
import GuestRouter from './Guest';
import GuestLoginRouter from './GuestLogin';
import GuestPurchaseRouter from './GuestPurchase';
import HotelMapsRouter from './HotelMaps';
import ReceptionNotificationRouter from './ReceptionNotification';
import ReclamationRouter from './Reclamation';
import RoomRouter from './Room';
import ServiceRouter from './Service';
import VoucherRouter from './Voucher';

const router=express.Router();


await router.use('/api/feedback', FeedbackRouter);
await router.use('/api/guest', GuestRouter);
await router.use('/api/guestlogin', GuestLoginRouter);
await router.use('/api/guestpurchase', GuestPurchaseRouter);
await router.use('/api/hotelmaps', HotelMapsRouter);
await router.use('/api/receptionnotification', ReceptionNotificationRouter);
await router.use('/api/reclamation', ReclamationRouter);
await router.use('/api/room', RoomRouter);
await router.use('/api/service', ServiceRouter);
await router.use('/api/voucher', VoucherRouter);



export default router;
