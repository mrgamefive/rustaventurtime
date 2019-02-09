const Discord = require("discord.js");

var bot = new Discord.client();

bot.on("ready", function() {
    bot.user.setGame("Rustbot, !help");
    console.log("Le bot a bien été connecte");
})

bot.login("NTQzNTQ5ODExNDA0NzAxNzE3.D0AgYA.HFibswyalAGQoVlHqYarzmI-LSk")
