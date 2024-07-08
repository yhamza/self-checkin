import express, { Router, Request, Response } from 'express';


const FeedbackController=require('../controller/Feedback')
const router: Router = express.Router();

router.get('',FeedbackController.getAllFeedbacks);

router.get('/:id',FeedbackController.getFeedbackById);

router.post('/create',FeedbackController.createFeedback)

router.delete('/delete/:id',FeedbackController.deleteFeedback);

router.put('/update/:id',FeedbackController.updateFeedback);


export default router;

