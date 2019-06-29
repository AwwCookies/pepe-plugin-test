module.exports = function (bot) {
  bot.on('message', msg => {
    if (msg.content === 'dank') {
      msg.reply('hi from test')
    }
  })
}
