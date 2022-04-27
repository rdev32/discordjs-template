export default {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Bot is up and running! Logged in as ${client.user.tag}`)
    }
}