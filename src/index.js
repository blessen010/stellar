const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();
const fs = require("fs");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✅${c.user.tag} is online`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  console.log(`${message.author.username}: ${message.content}`);
  const data = `${message.author.username}: ${message.content}\n`;

  fs.appendFile("logs.txt", data, (err) => {});
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;
    interaction.reply(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
  }
});

client.login(process.env.TOKEN);
