const router = require('koa-router');

const www = require('./handler.js');

router.get('/', www.index);
