import { InputProps } from './Input.props'
import styles from './Input.module.css'

export const Input = ({ className, ...rest }: InputProps): JSX.Element => {
  return <input className={`${styles.input} ${className}`} {...rest} />
}