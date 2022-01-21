import { TextareaProps } from './Textarea.props'
import styles from './Textarea.module.css'

export const Textarea = ({ className, ...rest }: TextareaProps): JSX.Element => {
  return <textarea className={`${styles.textarea} ${className}`} {...rest} />
}
