import { ReviewProps } from './Review.props'
import styles from './Review.module.css'
import { SvgIcon } from '../svgIcon/SvgIcon'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Rating } from '../rating/Rating'
import { IconTypes } from '../svgIcon/SvgIcon.props'

export const Review = ({ review, className, children, ...rest }: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review
  return (
    <div className={[styles.review, className].join(' ')} {...rest}>
      <SvgIcon className={styles.user} iconType={IconTypes.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}:</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
