import { HeaderProps } from './Header.props'
import styles from './Header.module.css'

export const Header = ({ ...rest }: HeaderProps): JSX.Element => {
  return <header {...rest}>Header</header>
}
