const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NDk1ODMyMTg3Nzk1NjY5MDIy.DpH3hA.H1Ei41DDP8Z6Uvk4ZsnM2Ag3cwY');
