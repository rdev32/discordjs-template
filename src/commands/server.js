import { SlashCommandBuilder } from '@discordjs/builders'

export default {
    data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('replies with server info'),
    async execute(interaction) {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nCreated: ${interaction.guild.createdAt.toLocaleDateString('es-PE')}\nVerification level: ${interaction.guild.verificationLevel}`)
    }
}