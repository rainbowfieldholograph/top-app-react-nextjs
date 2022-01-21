import { DividerProps } from './Divider.props'
import styles from './Divider.module.css'

export const Divider = ({ className, ...rest }: DividerProps) => (
  <hr className={[className, styles.divider].join(' ')} {...rest} />
)
