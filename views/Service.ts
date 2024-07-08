import express, { Router, Request, Response } from 'express';


const ServiceController=require('../controller/Service')
const router: Router = express.Router();

router.get('',ServiceController.getAllServices);

router.get('/:id',ServiceController.getServiceById);

router.post('/create',ServiceController.createService)

router.delete('/delete/:id',ServiceController.deleteService);

router.put('/update/:id',ServiceController.updateService);



export default router;


