const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('6面ダイスを振ります'),
	async execute(interaction) {

        const random = Math.floor( Math.random() * 6) + 1;

        if (random % 2 == 1) {
            await interaction.reply(`${random}\nこれは奇数！`)
        } else {
            await interaction.reply(`${random}\nこれは偶数！`)
        }
	},
};
