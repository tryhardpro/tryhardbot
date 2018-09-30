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

client.login('NDk1ODMyMTg3Nzk1NjY5MDIy.DpJ_pw.G63IxdHh08kLOxeoi_EHbS0Mtas');
void InitDiscord()
{
    
    