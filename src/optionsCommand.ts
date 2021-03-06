import { CommandSpec } from 'clibuilder'

export const optionsCommand = {
  name: 'opt',
  options: {
    boolean: {
      'a': {
        description: 'a',
        default: true
      },
      'b': {
        description: 'b'
      }
    }
  },
  run(args) {
    this.ui.info(`a: ${args.a}, b: ${args.b}`)
  }
} as CommandSpec
