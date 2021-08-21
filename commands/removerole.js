module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('862536946131664906');
    const member = message.mentions.members.first();

    member.roles.remove(epicRole);
    message.channel.send('Role Removed')
}

module.exports.config = {
    name: "removerole",
    description: "",
    usage: "?removerole",
    accessableby: "Members",
    aliases: []
}