import { registerCommands, registerEvents } from "./utils/registry";
import config from "../slappey.json";
import DiscordClient from "./client/client";
const { Client, GatewayIntentBits } = require("discord.js");

const client = new DiscordClient({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers]
});

(async () => {
    client.prefix = config.prefix || client.prefix;
    await registerCommands(client, "../commands");
    await registerEvents(client, "../events");
    await client.login(config.token);
})();
