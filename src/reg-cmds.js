const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");
require("dotenv").config();

const commands = [
  {
    name: "add",
    description: "adds two numbers.",
    options: [
      {
        name: "first-number",
        description: "the first number",
        type: ApplicationCommandOptionType.Number,
        required: true,
        choices: [
          {
            name: "one",
            value: 1,
          },

          {
            name: "two",
            value: 2,
          },
          {
            name: "three",
            value: 3,
          },
        ],
      },
      {
        name: "second-number",
        description: "the second number",
        type: ApplicationCommandOptionType.Number,
        required: true,
        choices: [
          {
            name: "one",
            value: 1,
          },

          {
            name: "two",
            value: 2,
          },
          {
            name: "three",
            value: 3,
          },
        ],
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering commands...");
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );
  } catch (error) {
    console.log(`there was an error registering commands: ${error}`);
  }
})();

// check check
