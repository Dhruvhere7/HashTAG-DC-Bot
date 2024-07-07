const {
	MessageEmbed, MessageButton, MessageActionRow
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`)
module.exports = {
	name: "ownergithub",
	category: "🔰 Info",
	aliases: ["ownergit", "source", "sourcecode", "src"],
	cooldown: 2,
	usage: "ownergithub",
	description: "Shows you the Github and Source Code Information about this Bot",
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix) => {
		let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
		
		try {	
			let button_public_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.github?.buttons.invite).setURL("https://discord.com/api/oauth2/authorize?client_id=1168734693492006973&permissions=8&scope=bot%20applications.commands")
			let button_support_dc = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.github?.buttons.dc).setURL("https://discord.gg/rone")
			let button_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.github?.buttons.botlist).setURL(`https://botlist.discord.gg/rone`)
			const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
			message.reply({embeds: [new MessageEmbed()
				.setColor(es.color)
				.setFooter(client.getFooter(es))
				.setTimestamp()
				.setThumbnail("https://cdn.discordapp.com/avatars/363141299588825120/df7b527a701d9a1ab6d73213576fe295.webp?size=1024")
				.setTitle(client.la[ls].cmds.info.github?.title)
				.setURL("https://discord.gg/rone")
				.addField("🆕 NEW GITHUB", `> There is now an **open Source** Version of this Bot on [\`bestgamershk\`'s Github](https://github.com/BestGamersHK)\n> [Link](https://github.com/BestGamersHK/Multipurpose-discord-bot) but please make sure to **give __Credits__** if you use it!\n> Make sure to read the [README](https://github.com/BestGamersHK/Multipurpose-discord-bot#readme) and the [WIKI / FAQ](https://github.com/BestGamersHK/Multipurpose-discord-bot/wiki) carefully before opening an [ISSUE](https://github.com/BestGamersHK/Multipurpose-discord-bot/issues/new/choose)`)
			.setDescription(client.la[ls].cmds.info.github?.description)],
components: allbuttons
			}).catch(error => console.log(error));
		} catch (e) {
			console.log(String(e.stack).grey.bgRed)
			return message.reply({embeds: [new MessageEmbed()
			  .setColor(es.wrongcolor)
			  .setFooter(client.getFooter(es))
			  .setTitle(client.la[ls].common.erroroccur)
			  .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
			]});
		}
	}
}
/**
 * @INFO
 * Bot Coded by bestgamershk | https://discord.gg/rone
 * @INFO
 * Work for BestGamersHK | discord.gg/rone
 * @INFO
 * Please mention him, when using this Code!
 * @INFO
 */
