import { PtagProps } from './Ptag.props'
import styles from './Ptag.module.css'

export const Ptag = ({ size = 'medium', children, ...rest }: PtagProps): JSX.Element => {
  let ptagStyles
  switch (size) {
    case 'small':
      ptagStyles = styles.small
      break
    case 'medium':
      ptagStyles = styles.medium
      break
    case 'large':
      ptagStyles = styles.large
      break
    default:
      break
  }
  return (
    <p className={ptagStyles} {...rest}>
      {children}
    </p>
  )
}
