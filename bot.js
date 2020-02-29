const Telegraf = require('telegraf')

const bot = new Telegraf('948970679:AAF8mBe5QJhfJzvWamx3HJPv_y8m18E2t4M')

bot.start((ctx) => {
  ctx.reply('Привет от моего первого бота')
})

bot.launch()
