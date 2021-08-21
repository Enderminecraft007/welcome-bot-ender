const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is ready`)
    
    bot.user.setActivity(`${bot.guilds.cache.size} máy chủ! || ${bot.users.cache.size} member || \n Đeo khẩu trang khi ra ngoài `, {type: "LISTENING"});
}