import { Search } from '../../components/search/Search'
import { SvgIcon } from '../../components/svgIcon/SvgIcon'
import { Menu } from '../menu/Menu'
import styles from './Sidebar.module.css'
import { SidebarProps } from './Sidebar.props'

export const Sidebar = ({ className, ...rest }: SidebarProps): JSX.Element => {
  return (
    <div className={`${styles.sidebar} ${className}`} {...rest}>
      <SvgIcon className={styles.logo} type="logo" />
      <Search />
      <Menu />
    </div>
  )
}
