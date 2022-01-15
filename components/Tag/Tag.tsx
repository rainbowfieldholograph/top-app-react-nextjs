import { TagProps } from './Tag.props'
import styles from './Tag.module.css'

export const Tag = ({
  size = 'small',
  children,
  color = 'ghost',
  className = '',
  href,
  ...rest
}: TagProps): JSX.Element => {
  return (
    <div
      className={[
        styles.tag,
        className,
        size === 'small' && styles.small,
        size === 'medium' && styles.medium,
        color === 'ghost' && styles.ghost,
        color === 'gray' && styles.gray,
        color === 'red' && styles.red,
        color === 'primary' && styles.primary,
        color === 'green' && styles.green,
      ].join(' ')}
      {...rest}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  )
}
