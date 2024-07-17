const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf('6349494750:AAGp2IqMAYJcSOLJ500t2nEJhuGVZl8yY3o')
bot.start((ctx) => ctx.reply(`Hi, ${ctx.from.first_name}! Welcome to Undercoin 🐸\nTap on the screen and earn coins.\nWe, in turn, will develop the game and add new features.\nJust click Play 🐸 in the bottom left corner to start the game.\nDon't forget about your friends - invite them to the game and compete!\nGood luck!`))
bot.help((ctx) => ctx.reply(`Tap on the screen and earn coins.\nWe, in turn, will develop the game and add new features.\nJust click Play 🐸 in the bottom left corner to start the game.\nDon't forget about your friends - invite them to the game and compete!\nGood luck!`))

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))