import { SvgIcon } from '../svgIcon/SvgIcon'
import { IconTypes } from '../svgIcon/SvgIcon.props'
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
      className={[
        styles.button,
        className,
        appearance === 'ghost' ? styles.ghost : '',
        appearance === 'primary' ? styles.primary : '',
      ].join(' ')}
      {...rest}
    >
      {children}
      {arrow !== 'none' && (
        <span className={[styles.arrow, arrow === 'down' ? styles.down : ''].join(' ')}>
          <SvgIcon iconType={IconTypes.arrow} />
        </span>
      )}
    </button>
  )
}
