import express, { Router, Request, Response } from 'express';


const ReclamationController=require('../controller/Reclamation')
const router: Router = express.Router();

router.get('',ReclamationController.getAllReclamations);

router.get('/:id',ReclamationController.getReclamationById);

router.post('/create',ReclamationController.createReclamation)

router.delete('/delete/:id',ReclamationController.deleteReclamation);

router.put('/update/:id',ReclamationController.updateReclamation);



export default router;


