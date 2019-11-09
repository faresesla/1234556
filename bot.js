const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("642799355539095563z")
setInterval(function() {
channel.send(`Spam By Fareseslam Or Evil Is Back`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
