import { SvgIcon } from '../svgIcon/SvgIcon'
import { IconTypes } from '../svgIcon/SvgIcon.props'
import styles from './ButtonIcon.module.css'
import { ButtonIconProps } from './ButtonIcon.props'

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...rest
}: ButtonIconProps): JSX.Element => {
  return (
    <button
      className={[
        className,
        styles.button,
        appearance === 'white' ? styles.white : '',
        appearance === 'primary' ? styles.primary : '',
      ].join(' ')}
      {...rest}
    >
      <SvgIcon iconType={icon} />
    </button>
  )
}
