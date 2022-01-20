import { CardProps } from './Card.props'
import styles from './Card.module.css'

export const Card = ({
  color = 'white',
  className,
  children,
  ...rest
}: CardProps): JSX.Element => {
  return (
    <div
      className={`${styles.card} ${className} ${color === 'blue' && styles.blue}`}
      {...rest}
    >
      {children}
    </div>
  )
}
