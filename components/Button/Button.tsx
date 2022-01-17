import { SvgIcon } from '../svgIcon/SvgIcon'
import styles from './Button.module.css'
import { ButtonProps } from './Button.props'

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.button} ${className} 
        ${appearance === 'ghost' && styles.primary} 
        ${appearance === 'primary' && styles.ghost}
  `}
      {...rest}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={`${styles.arrow} 
            ${arrow == 'down' && styles.down}`}
        >
          <SvgIcon type="arrow" />
        </span>
      )}
    </button>
  )
}
