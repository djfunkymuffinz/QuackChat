var Koa = require('koa');

const app = new Koa();

app.use(require('./flocks.js'));

module.exports = app;
