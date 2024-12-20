const express = require('express');
const { createPaymentController } = require('../controller/paymentController');

const router = express.Router();

router.post('/create-payment', createPaymentController);

module.exports = router;
