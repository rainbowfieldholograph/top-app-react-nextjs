import Link from 'next/link'
import { Search } from '../../components/search/Search'
import { SvgIcon } from '../../components/svgIcon/SvgIcon'
import { IconTypes } from '../../components/svgIcon/SvgIcon.props'
import { Menu } from '../menu/Menu'
import styles from './Sidebar.module.css'
import { SidebarProps } from './Sidebar.props'

export const Sidebar = ({ className, ...rest }: SidebarProps): JSX.Element => {
  return (
    <div className={[styles.sidebar, className].join(' ')} {...rest}>
      <div>
        <Link href="/">
          <a className={styles.link}>
            <SvgIcon className={styles.logo} iconType={IconTypes.logo} />
          </a>
        </Link>
      </div>
      <Search />
      <Menu />
    </div>
  )
}
