//変更禁止

const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const token = 'TOKENを入力';
const clientId = 'アプリIDを入力';
const guildId = 'サーバーIDを入力';
/*
tokenは人に知られてはいけないものなので人に絶対見せない自信がある場合は直接入れてください。
知られたくない場合は各々でいろいろ試行錯誤してみてください。
試行錯誤するほど知識ないけどせめてもの抵抗で直接入れたくない場合は
config.jsonを作成し、
{
	"token" : "TOKENを入力",
	"clientId" : "アプリIDを入力",
	"guildid" : "サーバーIDを入力"
}
上記のものを記入したうえで const token =....3種類をを削除し、下記に書き換えてください
const { clientId, guildId, token } = require('./config.json');
*/

const commands = [];

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}


const rest = new REST().setToken(token);


(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		
		console.error(error);
	}
})();
