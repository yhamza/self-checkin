import express, { Router, Request, Response } from 'express';


const VoucherController=require('../controller/Voucher')
const router: Router = express.Router();

router.get('',VoucherController.getAllVouchers);

router.get('/:id',VoucherController.getVoucherById);

router.post('/create',VoucherController.createVoucher)

router.delete('/delete/:id',VoucherController.deleteVoucher);

router.put('/update/:id',VoucherController.updateVoucher);



export default router;


