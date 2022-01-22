import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'
import { Input } from '../input/Input'
import { Rating } from '../rating/Rating'
import { Textarea } from '../textarea/Textarea'
import { Button } from '../button/Button'
import { SvgIcon } from '../svgIcon/SvgIcon'

export const ReviewForm = ({
  productId,
  className,
  ...rest
}: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={[styles.reviewForm, className].join(' ')} {...rest}>
        <div>
          <Input className={styles.input} placeholder="Имя" />
        </div>
        <div className={styles.title}>
          <Input placeholder="Заголовок отзыва" className={styles.input} />
        </div>
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <Textarea placeholder="Текст отзыва" className={styles.description} />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацие отзыв пройдет предварительную модерацию и проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
        <SvgIcon type="close" className={styles.close} />
      </div>
    </>
  )
}
