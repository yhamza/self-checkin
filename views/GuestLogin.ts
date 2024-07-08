import express, { Router, Request, Response } from 'express';


const GuestLoginController=require('../controller/GuestLogin')
const router: Router = express.Router();

router.get('',GuestLoginController.getAllGuestLogins);

router.get('/:id',GuestLoginController.getGuestLoginById);

router.post('/create',GuestLoginController.createGuestLogin)

router.delete('/delete/:id',GuestLoginController.deleteGuestLogin);

router.put('/update/:id',GuestLoginController.updateGuestLogin);



export default router;

