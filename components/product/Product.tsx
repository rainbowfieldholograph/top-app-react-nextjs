import { ProductProps } from './Product.props'
import styles from './Product.module.css'
import { Card } from '../card/Card'
import { Rating } from '../rating/Rating'
import { Tag } from '../tag/Tag'
import { Button } from '../button/Button'
import { declOfNum, priceRu } from '../../helpers/helpers'
import { Divider } from '../divider/Divider'
import Image from 'next/image'

export const Product = ({ product, className, ...rest }: ProductProps): JSX.Element => {
  return (
    <Card className={[styles.product, className].join(' ')}>
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
        {priceRu(product.price)}
        {product.oldPrice && (
          <Tag className={styles.oldPrice} color="green">
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.month}>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag key={c} className={styles.category} color="ghost">
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>в кредит</div>
      <div className={styles.rateTitle}>
        {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
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
        <Button className={styles.reviewButton} appearance="ghost" arrow="right">
          Читать отзывы
        </Button>
      </div>
    </Card>
  )
}
