const { Client, GatewayIntentBits, ActivityType, Message, Attachment, Guild, Events, time } = require("discord.js");
const { token, prefix } = require("./config.json");
var http = require("http");
var fs = require("fs");
const download = require("image-downloader");
const { channel } = require("diagnostics_channel");
const { EmbedBuilder } = require("discord.js");
const ytdl = require("ytdl-core");
const { on } = require("events");
const en = require("nanoid-good/locale/en"); // you should add locale of your preferred language
const nanoid = require("nanoid-good").nanoid(en);

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});
const currentDate = new Date();

const queue = new Map();

client.on("ready", () => {
    console.log(`Ready! Logged in as ${client.user.tag}!` + " | " + currentDate.toLocaleTimeString());
    client.user.setPresence({
        activities: [{ name: `hentai with senpai`, type: ActivityType.Watching }],
        status: "dnd"
    });
});

client.once("reconnecting", () => {
    console.log("Reconnecting!");
});

client.once("disconnect", () => {
    console.log("Disconnect!");
});

client.on("messageCreate", message => {
    console.log(message.guild.name + " | " + "#" + message.channel.name + " | " + message.author.tag + ": " + message.content);
});

/* client.on("messageCreate", (message) => {
  if ((message.attachments = true)) {
    console.log(
      message.guild.name +
        " | " +
        "#" +
        message.channel.name +
        " | " +
        message.author.tag +
        ": " +
        message.content +
        " (Attachment)"
    );
  } else {
    console.log(
      message.guild.name +
        " | " +
        "#" +
        message.channel.name +
        " | " +
        message.author.tag +
        ": " +
        message.content
    );
  }
}); */

//log to channel (#Nya-log - 1067208430210793533)
/* client.on("messageCreate", (message) => {
  if (message.author.id === client.user.id) return;
});

client.on("messageCreate", (message) => {
  var chanID = '1067208430210793533'
  client.channels.cache
    .get(chanID)
    .send(
      message.guild.name +
        " | " +
        "#" +
        message.channel.name +
        " | " +
        message.author.tag +
        ": " +
        message.content
    );
}); */

client.on("messageCreate", message => {
    var array = ["https://cdn.discordapp.com/attachments"];
    if (message.content.startsWith(array)) {
        var id = nanoid();
        const options = {
            url: message.content,
            dest: "C:/Users/durpyneko/Downloads/homework/bot downloads/"
        };
        download
            .image(options)
            .then(setTimeout(() => console.log(" - Console: Downloading! (" + id + ")")))
            .catch(err => console.log(err));
    }
});

client.on("messageCreate", message => {
    var array = ["https://media.discordapp.net/attachments"];
    if (message.content.startsWith(array)) {
        var id = nanoid();
        const options = {
            url: message.content,
            dest: "C:/Users/durpyneko/Downloads/homework/bot downloads/"
        };
        download
            .image(options)
            .then(setTimeout(() => console.log(" - Console: Downloading! (" + id + ")")))
            .catch(err => console.log(err));
    }
});

client.on("messageCreate", message => {
    message.attachments.forEach(attachment => {
        var id = nanoid();
        const url = attachment.url;
        const options = {
            url: url,
            dest: "C:/Users/durpyneko/Downloads/homework/bot downloads/"
        };
        download
            .image(options)
            .then(setTimeout(() => console.log(" - Console: Downloading! (" + id + ")")))
            .catch(err => console.log(err));
    });
});

const userID = "763864687481323620";
client.on("messageCreate", message => {
    if (message.author.id === userID) {
        if (message.content.startsWith("Nyan hello")) {
            message.reply("Hello master~");
        }
    }
});
client.on("messageCreate", message => {
    if (message.author.id === userID) {
        if (message.content.startsWith("Echo")) {
            var echoMess = message.content.replace("Echo", "");
            var user = message.author.tag;
            message.channel.send(echoMess);
            setTimeout(() => message.delete());
            setTimeout(() => console.log(" - Console: Echo'ed " + user + "'s message"), 550);
        }
    }
});
client.on("messageCreate", message => {
    if (message.author.id === userID) {
        if (message.content.startsWith("!t")) {
            var echoMess = message.content.replace("!t", "");
            var chanID = "952620781232328835";
            client.channels.cache.get(chanID).send(echoMess);
        }
    }
});
/* client.on("messageCreate", (message) => {
  if (message.content.startsWith("Echo")) {
      var echoMess = message.content.replace("Echo", "");
      message.channel.send(echoMess);
      setTimeout(() => message.delete(), 500);
    }
}); */

const helpEmbed = {
    content: null,
    embeds: [
        {
            title: "``Help",
            description:
                "Commands:\n\n**Echo** (no prefix/not public):  echos your message.\n\n**Del** (prefix/not public): deletes specified amount of messages\n\n**DM** (prefix): replies with 'test' for now",
            color: null
        }
    ],
    attachments: []
};
const helpEmbed2 = {
    content: "",
    tts: false,
    embeds: [
        {
            type: "rich",
            title: `Help`,
            description: `Commands`,
            color: 0xff00bf,
            fields: [
                {
                    name: `Echo (no prefix/not public)`,
                    value: `Echos your message.`
                },
                {
                    name: `Del (prefix/not public)`,
                    value: `Deletes specified amounts of messages.`
                },
                {
                    name: `DM (prefix)`,
                    value: `dm's you 'test' for now`
                }
            ],
            footer: {
                text: `url leads to my website. not much going on atm`
            },
            url: `https://durpy.pixelboop.net/`
        }
    ]
};

client.on("messageCreate", message => {
    var help = "Help";
    if (message.content.startsWith(prefix + help)) {
        var user = message.author.tag;
        message.reply(helpEmbed2).catch(err => console.log(err));
        setTimeout(() => console.log(" - Console: Replied to " + user + " with help embed."), 800);
    }
});
/* client.on("messageCreate", (message) => {
  var help = "Help";
  if (message.content.startsWith(prefix + help)) {
    message.reply("Commands: Echo, (no prefix/not public, echos your message) | Del (prefix/not public, deletes specified amount of messages) | DM (prefix, replies with 'test' for now) working on embed");
  }
}); */

const exampleEmbed = {
    color: 0x0099ff,
    title: "Some title",
    url: "https://discord.js.org",
    author: {
        name: "Some name",
        icon_url: "https://i.imgur.com/AfFp7pu.png",
        url: "https://discord.js.org"
    },
    description: "Some description here",
    thumbnail: {
        url: "https://i.imgur.com/AfFp7pu.png"
    },
    fields: [
        {
            name: "Regular field title",
            value: "Some value here"
        },
        {
            name: "\u200b",
            value: "\u200b",
            inline: false
        },
        {
            name: "Inline field title",
            value: "Some value here",
            inline: true
        },
        {
            name: "Inline field title",
            value: "Some value here",
            inline: true
        },
        {
            name: "Inline field title",
            value: "Some value here",
            inline: true
        }
    ],
    image: {
        url: "https://i.imgur.com/AfFp7pu.png"
    },
    timestamp: new Date().toISOString(),
    footer: {
        text: "Some footer text here",
        icon_url: "https://i.imgur.com/AfFp7pu.png"
    }
};

client.on("messageCreate", message => {
    if (message.author.id === userID) {
        if (message.content.startsWith("``Del")) {
            const args = message.content.replace("``Del", "").trim();
            if (args > 99) {
                message.reply("Can't delete more than 99 messages!");
                return;
            } else {
                message.channel
                    .bulkDelete(parseInt(args) + 1)
                    .then(() => {
                        message.channel.send("Deleted " + args + " messages!");
                    })
                    .catch(err => console.log(err));
            }
        }
    }
});

client.on("messageCreate", message => {
    if (message.author.id === userID) {
        if (message.content.startsWith("``DM")) {
            var dmId = message.author.id;
            var dmUser = message.author.tag;
            client.users.send(dmId, "test").catch(err => console.log(err));
            setTimeout(() => console.log(" - Console: Dm'd " + dmUser), 500);
        }
    }
});

client.login(token);
