const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('こんにちは'),
	async execute(interaction) {
        await interaction.reply('こんにちは！');
	},
};
