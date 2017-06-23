import { Cli, Command, LogPresenter } from 'clibuilder'

export function getPresenter<Presenter = LogPresenter>(subject: Cli | Command): Presenter {
  return (subject as any).ui
}
