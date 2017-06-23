import { Cli, Command } from 'clibuilder'

export function getPresenter<Presenter>(subject: Cli | Command): Presenter {
  return (subject as any).ui
}
