const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        
        if (message.content.startsWith('テンプレートを教えて')) { 
            
            await message.channel.send('https://github.com/Touka-Tomosibi/Discord.js-v14-Template');
            
         }
	},
};
