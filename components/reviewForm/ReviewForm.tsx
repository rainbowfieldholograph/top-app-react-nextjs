import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'
import { Input } from '../input/Input'
import { Rating } from '../rating/Rating'
import { Textarea } from '../textarea/Textarea'
import { Button } from '../button/Button'
import { SvgIcon } from '../svgIcon/SvgIcon'
import { useForm, Controller } from 'react-hook-form'
import { IReviewForm } from './ReviewForm.interface'

export const ReviewForm = ({
  productId,
  className,
  ...rest
}: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit } = useForm<IReviewForm>()

  const onSubmit = (data: IReviewForm) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={[styles.reviewForm, className].join(' ')} {...rest}>
        <div>
          <Input className={styles.input} {...register('name')} placeholder="Имя" />
        </div>
        <div>
          <Input
            {...register('title')}
            placeholder="Заголовок отзыва"
            className={styles.input}
          />
        </div>
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <Rating
                ref={field.ref}
                isEditable
                rating={field.value}
                setRating={field.onChange}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description')}
          placeholder="Текст отзыва"
          className={styles.description}
        />
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
    </form>
  )
}
