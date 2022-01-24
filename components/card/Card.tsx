import { CardProps } from './Card.props'
import styles from './Card.module.css'
import { ForwardedRef, forwardRef } from 'react'

export const Card = forwardRef(
  (
    { color = 'white', className, children, ...rest }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        className={[styles.card, className, color === 'blue' ? styles.blue : ''].join(' ')}
        {...rest}
      >
        {children}
      </div>
    )
  }
)
