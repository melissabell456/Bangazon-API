'use strict';

const { Router } = require('express');
const router = Router();

const { getPaymentTypes,
        getSinglePaymentType,
        putPaymentType } = require('../controllers/Payment-Type-Ctrl');

router.get('/payment-types', getPaymentTypes);
router.get('/payment-types/:id', getSinglePaymentType);
// router.post('/payment-type', postPaymentType);
router.put('/payment-types/:id', putPaymentType);
// router.delete('/payment-type/:id', deletePaymentType);

module.exports = router;