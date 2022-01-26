import { InputProps } from './Input.props'
import styles from './Input.module.css'
import { ForwardedRef, forwardRef } from 'react'

export const Input = forwardRef(
  (
    { className, error, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={[styles.wrapper, className].join(' ')}>
        <input
          className={[styles.input, error && styles.error].join(' ')}
          ref={ref}
          {...rest}
        />
        {error && (
          <span role="alert" className={styles.errorMsg}>
            {error.message}
          </span>
        )}
      </div>
    )
  }
)
