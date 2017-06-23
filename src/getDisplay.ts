import { Cli, Command } from 'clibuilder'

import { InMemoryDisplay } from './InMemoryDisplay'

export function getDisplay(subject: Cli | Command): InMemoryDisplay {
  return (subject as any).ui.display
}
