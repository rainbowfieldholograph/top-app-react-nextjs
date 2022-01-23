import { TextareaProps } from './Textarea.props'
import styles from './Textarea.module.css'
import { ForwardedRef, forwardRef } from 'react'

export const Textarea = forwardRef(
  (
    { className, ...rest }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return <textarea className={`${styles.textarea} ${className}`} ref={ref} {...rest} />
  }
)
