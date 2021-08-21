const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('This is a test Embed.')
        .setURL('https://www.youtube.com/channel/UCm01e4wNhVP2voJcu_6a9qw')
        .setAuthor('EnderSMP')
        .setDescription(' `Làm đéo gì có cái gì ở đây` ')
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/avatars/850277508522704896/4343c6b6b4aab2858fd4f61271a8914c.jpg?size=2048')
        .setImage('https://cdn.discordapp.com/avatars/850277508522704896/4343c6b6b4aab2858fd4f61271a8914c.jpg?size=2048')
        .setFooter('This is a example footer', 'https://cdn.discordapp.com/avatars/850277508522704896/4343c6b6b4aab2858fd4f61271a8914c.jpg?size=2048')
        .addFields(
            { name: 'Test Number 1', value: 'HeroMC', inline: true},
            { name: 'Test Number 2', value: 'HeroMC là lũ súc vật', inline: true},
            { name: 'Test Number 3', value: 'Con cặc gì vậy anh bạn'},
            { name: 'Test Number 4', value: 'ADUDẢKWA'}
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "embed",
    description: "example of an Embed.",
    usage: "?embed",
    accessableby: "Members",
    aliases: []
}