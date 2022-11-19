const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Returns the bot\'s ping!'),
    async execute(interection, client) {
        const message = await interection.deferReply({
            fetchReply: true
        });
        const newMessage = `API Latency:${client.ws.ping}\nClient Ping: {message.createdTimestamp -interaction.createdTimeStamp}`
        await interection.editReply({
            content: newMessage
        })
    }
}