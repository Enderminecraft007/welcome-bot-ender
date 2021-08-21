const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('877032735343009832');
        let verifiedRole = message.guild.roles.cache.get('850283707910848532');
        if(mutedRole) {
            member.roles.remove(mutedRole);
            member.roles.add(verifiedRole);
            message.channel.send(`**Bạn vừa Unmuted** ${member.id}`);
        }
}

module.exports.config = {
    name: "unmute",
    description: "",
    usage: "?unmute",
    accessableby: "Members",
    aliases: []
}