import express from 'express';

import customer from './customer';

const router = express.Router();

router.use('/customer', customer);

// import { getTemplate } from '../utils';

// const mustache = require('mustache');
//
// router.get('/', (req, res) => {
//   res.render('index', { title: 'Express' });
// });
//
// router.get('/oo/plist', async (req, res) => {
//   const template = getTemplate('plist.xml');
//   const render = mustache.render(template, {});
//   res.set('Content-Type', 'text/plain; charset=utf-8');
//   res.send(render);
// });

export default router;
