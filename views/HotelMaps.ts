import express, { Router, Request, Response } from 'express';


const HotelMapsController=require('../controller/HotelMaps')
const router: Router = express.Router();

router.get('',HotelMapsController.getAllHotelMapss);

router.get('/:id',HotelMapsController.getHotelMapsById);

router.post('/create',HotelMapsController.createHotelMaps)

router.delete('/delete/:id',HotelMapsController.deleteHotelMaps);

router.put('/update/:id',HotelMapsController.updateHotelMaps);



export default router;


