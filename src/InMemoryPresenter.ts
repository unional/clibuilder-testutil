import { PlainPresenter, DisplayLevel } from 'clibuilder'

import { InMemoryDisplay } from './InMemoryDisplay'

export class InMemoryPresenter extends PlainPresenter {
  display = new InMemoryDisplay()
  displayLevel = DisplayLevel.Verbose
}
