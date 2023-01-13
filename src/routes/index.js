var express = require('express');
var router = express.Router();

const mustache = require('mustache')
const { getTemplate } = require('../utils')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/oo/plist', async (req, res, next) => {
  const template = getTemplate('plist.xml')
  const render = mustache.render(template, {})
  res.set('Content-Type', 'text/plain; charset=utf-8');
  res.send(render)
})

module.exports = router;
