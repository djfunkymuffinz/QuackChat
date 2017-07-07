class Www {

  static async index(ctx) {
    await ctx.render('index', ctx);
  }

}

module.exports = Www;
