import { ReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'
import { Input } from '../input/Input'
import { Rating } from '../rating/Rating'
import { Textarea } from '../textarea/Textarea'
import { Button } from '../button/Button'
import { SvgIcon } from '../svgIcon/SvgIcon'
import { useForm, Controller } from 'react-hook-form'
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface'
import axios from 'axios'
import { API } from '../../helpers/api'
import { useState } from 'react'
import { IconTypes } from '../svgIcon/SvgIcon.props'

export const ReviewForm = ({
  productId,
  className,
  ...rest
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>()

  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>()

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {
        ...formData,
        productId,
      })

      if (data.message) {
        setIsSuccess(true)
        reset()
      } else {
        setErrorMessage('Что-то пошло не так')
      }
    } catch (error) {
      error instanceof Error
        ? setErrorMessage(error.message)
        : setErrorMessage(`Неизвестная ошибка. ${error}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={[styles.reviewForm, className].join(' ')} {...rest}>
        <Input
          className={styles.input}
          {...register('name', { required: { value: true, message: 'Заполните имя' } })}
          error={errors.name}
          placeholder="Имя"
        />
        <Input
          {...register('title', {
            required: { value: true, message: 'Заполните заголовок' },
          })}
          error={errors.title}
          placeholder="Заголовок отзыва"
          className={styles.input}
        />
        <div className={styles.rating}>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Поставьте оценку' } }}
            render={({ field }) => (
              <>
                <span className={errors.rating && styles.errorText}>Оценка:</span>
                <Rating
                  ref={field.ref}
                  isEditable
                  rating={field.value}
                  setRating={field.onChange}
                  error={errors.rating}
                />
              </>
            )}
          />
        </div>
        <Textarea
          {...register('description', {
            required: { value: true, message: 'Заполните описание' },
          })}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацие отзыв пройдет предварительную модерацию и проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={[styles.success, styles.panel].join(' ')}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
          <SvgIcon
            onClick={() => setIsSuccess(false)}
            iconType={IconTypes.close}
            className={styles.close}
          />
        </div>
      )}
      {errorMessage && (
        <div className={[styles.error, styles.panel].join(' ')}>
          Что-то пошло не так, попробуйте обновить страницу
          <SvgIcon
            onClick={() => setErrorMessage(undefined)}
            iconType={IconTypes.close}
            className={styles.close}
          />
        </div>
      )}
    </form>
  )
}
