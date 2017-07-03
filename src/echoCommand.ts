import { CommandSpec } from 'clibuilder'

export const echoCommand = {
  name: 'echo',
  run(argv) {
    this.ui.info(...argv)
  }
} as CommandSpec
