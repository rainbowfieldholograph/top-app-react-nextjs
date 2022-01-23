import { InputProps } from './Input.props'
import styles from './Input.module.css'
import { ForwardedRef, forwardRef } from 'react'

export const Input = forwardRef(
  ({ className, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return <input className={[styles.input, className].join(' ')} ref={ref} {...rest} />
  }
)
