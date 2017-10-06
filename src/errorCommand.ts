import { CommandSpec } from 'clibuilder'

export const errorCommand: CommandSpec = {
  name: 'error',
  run() {
    this.ui.error('error...')
  }
}
