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
  isOpened,
  className,
  ...rest
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
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

  const tabIndexIfOpened = isOpened ? 0 : -1

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={[styles.reviewForm, className].join(' ')} {...rest}>
        <Input
          className={styles.input}
          {...register('name', { required: { value: true, message: 'Заполните имя' } })}
          error={errors.name}
          placeholder="Имя"
          tabIndex={tabIndexIfOpened}
          aria-invalid={!!errors.name}
        />
        <Input
          {...register('title', {
            required: { value: true, message: 'Заполните заголовок' },
          })}
          error={errors.title}
          placeholder="Заголовок отзыва"
          className={styles.input}
          tabIndex={tabIndexIfOpened}
          aria-invalid={!!errors.title}
        />
        <div className={styles.rating}>
          <span className={errors.rating && styles.errorText}>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Поставьте оценку' } }}
            render={({ field }) => (
              <Rating
                ref={field.ref}
                isEditable
                rating={field.value}
                setRating={field.onChange}
                error={errors.rating}
                tabIndex={tabIndexIfOpened}
              />
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
          tabIndex={tabIndexIfOpened}
          aria-label="Текст отзыва"
          aria-invalid={!!errors.description}
        />
        <div className={styles.submit}>
          <Button
            appearance="primary"
            tabIndex={tabIndexIfOpened}
            onClick={() => clearErrors()}
          >
            Отправить
          </Button>
          <span className={styles.info}>
            * Перед публикацие отзыв пройдет предварительную модерацию и проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div role="alert" className={[styles.success, styles.panel].join(' ')}>
          <p className={styles.successTitle}>Ваш отзыв отправлен</p>
          <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
          <button
            aria-label="закрыть оповещение"
            onClick={() => setIsSuccess(false)}
            className={styles.close}
          >
            <SvgIcon iconType={IconTypes.close} />
          </button>
        </div>
      )}
      {errorMessage && (
        <div className={[styles.error, styles.panel].join(' ')}>
          Что-то пошло не так, попробуйте обновить страницу
          <button
            aria-label="закрыть оповещение"
            onClick={() => setErrorMessage(undefined)}
            className={styles.close}
          >
            <SvgIcon iconType={IconTypes.close} />
          </button>
        </div>
      )}
    </form>
  )
}
