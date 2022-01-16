import styles from './Sidebar.module.css'
import { SidebarProps } from './Sidebar.props'

interface Props {}

export const Sidebar = ({ ...rest }: SidebarProps): JSX.Element => {
  return <div {...rest}>Sidebar</div>
}
