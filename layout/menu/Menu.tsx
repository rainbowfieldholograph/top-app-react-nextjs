import { firstLevelMenu } from '../../helpers/helpers'
import styles from './Menu.module.css'
import { MenuFirstLevel } from './menuFirstLevel/MenuFirstLevel'

export const Menu = (): JSX.Element => {
  return (
    <nav role="navigation">
      <MenuFirstLevel firstLevelMenu={firstLevelMenu} />
    </nav>
  )
}
