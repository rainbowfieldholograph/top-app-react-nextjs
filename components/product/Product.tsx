import { ProductProps } from './Product.props'
import styles from './Product.module.css'
import { Card } from '../card/Card'
import { Rating } from '../rating/Rating'
import { Tag } from '../tag/Tag'
import { Button } from '../button/Button'

export const Product = ({ product, className, ...rest }: ProductProps): JSX.Element => {
  return (
    <Card className={[styles.product, className].join(' ')}>
      <div className={styles.logo}>
        <img
          className={styles.image}
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
        />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag key={c} color="ghost">
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
      <div className={styles.hr}>
        <hr className={styles.hrInner} />
      </div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.features}>фичи</div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <div>Преимущества</div>
          <div>{product.advantages}</div>
        </div>
        <div className={styles.disadvantages}>
          <div>Недостатки</div>
          <div>{product.disadvantages}</div>
        </div>
      </div>
      <div className={styles.hr}>
        <hr className={styles.hrInner} />
      </div>
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow="right">
          Читать отзывы
        </Button>
      </div>
    </Card>
  )
}
