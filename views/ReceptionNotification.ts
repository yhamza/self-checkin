import express, { Router, Request, Response } from 'express';


const ReceptionNotificationController=require('../controller/ReceptionNotification')
const router: Router = express.Router();

router.get('',ReceptionNotificationController.getAllReceptionNotifications);

router.get('/:id',ReceptionNotificationController.getReceptionNotificationById);

router.post('/create',ReceptionNotificationController.createReceptionNotification)

router.delete('/delete/:id',ReceptionNotificationController.deleteReceptionNotification);

router.put('/update/:id',ReceptionNotificationController.updateReceptionNotification);



export default router;

