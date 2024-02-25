import { SlashCommandBuilder } from '@discordjs/builders'

export default {
    data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('replies with user info'),
    async execute(interaction) {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`)
    }
}