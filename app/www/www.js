const Koa        = require('koa');
const handlebars = require('koa-handlebars');

const app = new Koa();

app.use(handlebars({
    extension:   [ 'html', 'handlebars' ],
    viewsDir:    './views',
    partialsDir: './views',
}));

app.use(require('./routes.js'));

module.exports = app;
