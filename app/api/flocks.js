const router = require('koa-router')();

const flocks = require('../controllers/flocks.js')

router.get('/', flocks.getFlocks);

module.exports = router.middleware();
