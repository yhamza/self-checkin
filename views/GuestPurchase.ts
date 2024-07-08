import express, { Router, Request, Response } from 'express';


const GuestController=require('../controller/Guest')
const router: Router = express.Router();

router.get('',GuestController.getAllGuests);

router.get('/:id',GuestController.getGuestById);

router.post('/create',GuestController.createGuest)

router.delete('/delete/:id',GuestController.deleteGuest);

router.put('/update/:id',GuestController.updateGuest);



export default router;


