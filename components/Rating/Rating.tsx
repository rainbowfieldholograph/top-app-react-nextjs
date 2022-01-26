import {
  useEffect,
  useState,
  KeyboardEvent,
  Fragment,
  forwardRef,
  ForwardedRef,
  useRef,
} from 'react'
import { SvgIcon } from '../svgIcon/SvgIcon'
import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import { IconTypes } from '../svgIcon/SvgIcon.props'

const MAX_STAR_COUNT = 5

export const Rating = forwardRef(
  (
    {
      isEditable = false,
      rating,
      setRating,
      tabIndex,
      error,
      className,
      ...rest
    }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(MAX_STAR_COUNT).fill(<></>)
    )
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([])

    useEffect(() => {
      constructRating(rating)
    }, [rating, tabIndex])

    const computeFocus = (r: number, index: number): number => {
      if (!isEditable) return -1
      if (!rating && index === 0) return tabIndex ?? 0
      if (r === index + 1) return tabIndex ?? 0
      return -1
    }

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
        return (
          <span
            className={[
              styles.star,
              index < currentRating ? styles.filled : '',
              isEditable ? styles.editable : '',
            ].join(' ')}
            onMouseEnter={() => changeDisplay(index + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClickStar(index + 1)}
            tabIndex={computeFocus(rating, index)}
            onKeyDown={handleKey}
            ref={(r) => ratingArrayRef.current?.push(r)}
            role={isEditable ? 'slider' : ''}
            aria-valuenow={rating}
            aria-valuemax={MAX_STAR_COUNT}
            aria-valuemin={1}
            aria-invalid={!!error}
            aria-label={isEditable ? 'Укажите рейтинг' : `рейтинг ${rating}`}
          >
            <SvgIcon iconType={IconTypes.star} />
          </span>
        )
      })
      setRatingArray(updatedArray)
    }

    const changeDisplay = (index: number) => {
      if (!isEditable) return
      constructRating(index)
    }

    const onClickStar = (index: number) => {
      if (!isEditable || !setRating) return
      setRating(index)
    }

    const handleKey = (event: KeyboardEvent<HTMLDivElement>) => {
      if (!isEditable || !setRating) return

      switch (event.code) {
        case 'ArrowRight':
        case 'ArrowUp':
          event.preventDefault()
          if (!rating) setRating(1)
          else setRating(rating < MAX_STAR_COUNT ? rating + 1 : MAX_STAR_COUNT)
          ratingArrayRef.current[rating]?.focus()
          break
        case 'ArrowLeft':
        case 'ArrowDown':
          event.preventDefault()
          setRating(rating > 1 ? rating - 1 : 1)
          ratingArrayRef.current[rating - 2]?.focus()
          break
      }
    }

    return (
      <div
        className={[styles.wrapper, className, error ? styles.error : ''].join(' ')}
        {...rest}
        ref={ref}
      >
        {ratingArray.map((rating, index) => (
          <Fragment key={index}>{rating}</Fragment>
        ))}
        {error && (
          <p role="alert" className={styles.errorMsg}>
            {error.message}
          </p>
        )}
      </div>
    )
  }
)
