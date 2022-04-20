import { SlashCommandBuilder } from '@discordjs/builders'

export default {
    data: new SlashCommandBuilder()
    .setName('greet')
    .setDescription('replies a greet'),
    async execute(interaction) {
        await interaction.reply(`hello ${interaction.user.tag}!`)
    }
}