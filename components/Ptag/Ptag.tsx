import { PtagProps } from './Ptag.props'
import styles from './Ptag.module.css'

export const Ptag = ({
  size = 'medium',
  className,
  children,
  ...rest
}: PtagProps): JSX.Element => {
  let ptagStyles: string
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
      return <></>
  }
  return (
    <p className={[ptagStyles, className].join(' ')} {...rest}>
      {children}
    </p>
  )
}
