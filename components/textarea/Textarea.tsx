import { TextareaProps } from './Textarea.props'
import styles from './Textarea.module.css'
import { ForwardedRef, forwardRef } from 'react'

export const Textarea = forwardRef(
  (
    { className, error, ...rest }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={[styles.wrapper, className].join(' ')}>
        <textarea
          className={[styles.textarea, error && styles.error].join(' ')}
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
