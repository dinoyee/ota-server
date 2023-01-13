import express from 'express';
import { getTemplate } from '../utils';

const router = express.Router();

const mustache = require('mustache');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/oo/plist', async (req, res) => {
  const template = getTemplate('plist.xml');
  const render = mustache.render(template, {});
  res.set('Content-Type', 'text/plain; charset=utf-8');
  res.send(render);
});

export default router;
