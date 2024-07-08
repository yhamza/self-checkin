import express, { Router, Request, Response } from 'express';


const RoomController=require('../controller/Room')
const router: Router = express.Router();

router.get('',RoomController.getAllRooms);

router.get('/:id',RoomController.getRoomById);

router.post('/create',RoomController.createRoom)

router.delete('/delete/:id',RoomController.deleteRoom);

router.put('/update/:id',RoomController.updateRoom);



export default router;


