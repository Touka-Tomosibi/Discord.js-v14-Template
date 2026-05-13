const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const token = 'TOKENを入力';

/*
tokenは人に知られてはいけないものなので人に絶対見せない自信がある場合は直接入れてください。
知られたくない場合は各々でいろいろ試行錯誤してみてください。
せめてもの抵抗で直接入れたくない場合は
config.jsonを作成し、
{
	"token" : "TOKENを入力",
	"clientId" : "アプリIDを入力",
	"guildid" : "サーバーIDを入力"
}
上記のものを記入したうえで const token =....をを削除し、下記に書き換えてください
const { token } = require('./config.json');
*/

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent,  GatewayIntentBits.GuildMessages] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}


const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

require('./deploy-commands.js');
//index.jsを起動するとコマンドもアップデートしてくれるだけなので不要な方は消すかコマンドアウトしておいてください

client.login(token);
