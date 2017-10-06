import { CommandSpec } from 'clibuilder'

export const noopCommand: CommandSpec = {
  name: 'noop',
  run() {
    return
  }
}
