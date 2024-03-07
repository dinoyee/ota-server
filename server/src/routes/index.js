import express from 'express';

import customer from './customer';
import admin from './admin';

const router = express.Router();

router.use('/customer', customer);
router.use('/admin', admin);

export default router;
