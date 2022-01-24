import { useEffect, useState, KeyboardEvent, Fragment, forwardRef, ForwardedRef } from 'react'
import { SvgIcon } from '../svgIcon/SvgIcon'
import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import { IconTypes } from '../svgIcon/SvgIcon.props'

const MAX_STAR_COUNT = 5

export const Rating = forwardRef(
  (
    { isEditable = false, rating, setRating, error, className, ...rest }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(MAX_STAR_COUNT).fill(<></>)
    )

    useEffect(() => {
      constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
        return (
          <span
            className={[
              styles.star,
              index < currentRating && styles.filled,
              isEditable && styles.editable,
            ].join(' ')}
            onMouseEnter={() => changeDisplay(index + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClickStar(index + 1)}
          >
            <SvgIcon
              iconType={IconTypes.star}
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(event: KeyboardEvent<SVGElement>) =>
                isEditable && handleSpace(index + 1, event)
              }
            />
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

    const handleSpace = (index: number, event: KeyboardEvent<SVGElement>) => {
      if (event.code !== 'Enter' || !setRating) return
      setRating(index)
    }

    return (
      <div className={styles.wrapper}>
        <div
          className={[styles.starsWrapper, className, error && styles.error].join(' ')}
          ref={ref}
          {...rest}
        >
          {ratingArray.map((rating, index) => (
            <Fragment key={index}>{rating}</Fragment>
          ))}
        </div>
        {error && <span className={styles.errorMsg}>{error.message}</span>}
      </div>
    )
  }
)
