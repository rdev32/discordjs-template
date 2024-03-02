interface Command {
  data: SlashCommandBuilder
  service: (interaction: CommandInteraction) => Promise<void>
}

interface Event {
  name: Events
  once?: boolean
  controller: (interaction: CommandInteraction) => Promise<void>
}
