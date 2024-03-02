import { Events, Client } from 'discord.js'

export default {
	name: Events.ClientReady,
	once: true,
	controller(client: Client) {
		console.log(`Ready! Logged in as ${client.user.tag}`)
	}
}
