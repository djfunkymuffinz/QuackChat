var Koa = require('koa');
var compose = require('koa-compose');
var api = require('./app/api/api.js');


var app = new Koa();
app.use(async function composeSubapp(ctx) {
  await compose(require('./app/api/api.js').middleware)(ctx);
});


app.listen(8080, function () {
  console.log('QuackChat running on port 8080!')
});
