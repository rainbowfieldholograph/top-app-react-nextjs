import { ProductProps } from './Product.props'
import styles from './Product.module.css'
import { Card } from '../card/Card'
import { Rating } from '../rating/Rating'
import { Tag } from '../tag/Tag'
import { Button } from '../button/Button'
import { declOfNum, priceRu } from '../../helpers/Helpers'
import { Divider } from '../divider/Divider'
import Image from 'next/image'
import { ForwardedRef, forwardRef, useRef, useState } from 'react'
import { Review } from '../review/Review'
import { ReviewForm } from '../reviewForm/ReviewForm'
import { motion } from 'framer-motion'

export const Product = motion(
  forwardRef(
    ({ product, className, ...rest }: ProductProps, ref: ForwardedRef<HTMLDivElement>) => {
      const reviewRef = useRef<HTMLDivElement>(null)
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false)

      const scrollToReview = () => {
        setIsReviewOpened(true)
        reviewRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
        reviewRef.current?.focus()
      }

      const animationVariants = {
        visible: { opacity: 1, height: 'auto' },
        hidden: { opacity: 0, height: '0px', overflow: 'hidden' },
      }

      return (
        <div className={className} {...rest} ref={ref}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              <Image
                className={styles.image}
                src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                alt={product.title}
                width={70}
                height={70}
              />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              <span>
                <p className="visualyHidden">цена</p>
                {product?.price && priceRu(product.price)}
              </span>
              {product.oldPrice && (
                <Tag className={styles.oldPrice} color="green">
                  <p className="visualyHidden">скидка</p>
                  {product?.price && priceRu(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              <span>
                <p className="visualyHidden">кредит</p>
                {product.credit && priceRu(product.credit)}/
                <span className={styles.month}>мес</span>
              </span>
            </div>
            <div className={styles.rating}>
              <p className="visualyHidden">{`рейтинг ${
                product.reviewAvg ?? product.initialRating
              }`}</p>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map((c) => (
                <Tag key={c} className={styles.category} color="ghost">
                  {c}
                </Tag>
              ))}
            </div>
            <div aria-hidden={true} className={styles.priceTitle}>
              цена
            </div>
            <div aria-hidden={true} className={styles.creditTitle}>
              кредит
            </div>
            <div className={styles.rateTitle}>
              <a href="#ref" onClick={scrollToReview}>
                {product.reviewCount}{' '}
                {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
              </a>
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.features}>
              {product.characteristics.map((c) => (
                <div className={styles.characteristics} key={c.name}>
                  <span className={styles.characteristicsName}>{c.name}</span>
                  <span className={styles.characteristicsDots}></span>
                  <span className={styles.characteristicsValue}>{c.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.advBlock}>
              {product.advantages && (
                <div className={styles.advantages}>
                  <div className={styles.advTitle}>Преимущества</div>
                  <div>{product.advantages}</div>
                </div>
              )}
              {product.disadvantages && (
                <div className={styles.disadvantages}>
                  <div className={styles.advTitle}>Недостатки</div>
                  <div>{product.disadvantages}</div>
                </div>
              )}
            </div>
            <Divider className={[styles.hr, styles.hr2].join(' ')} />
            <div className={styles.actions}>
              <Button appearance="primary">Узнать подробнее</Button>
              <Button
                onClick={() => setIsReviewOpened(!isReviewOpened)}
                className={styles.reviewButton}
                appearance="ghost"
                arrow={isReviewOpened ? 'down' : 'right'}
                aria-expanded={isReviewOpened}
              >
                Читать отзывы
              </Button>
            </div>
          </Card>
          <motion.div
            animate={isReviewOpened ? 'visible' : 'hidden'}
            variants={animationVariants}
            initial="hidden"
          >
            <Card
              color="blue"
              ref={reviewRef}
              className={styles.reviews}
              tabIndex={isReviewOpened ? 0 : -1}
            >
              {product.reviews.map((r) => (
                <div key={r._id}>
                  <Review review={r} />
                  <Divider />
                </div>
              ))}
              <ReviewForm isOpened={isReviewOpened} productId={product._id} />
            </Card>
          </motion.div>
        </div>
      )
    }
  )
)
