import { ProductAdvantagesProps } from './ProductAdvantages.props'
import styles from './ProductAdvantages.module.css'
import { Htag } from '../htag/Htag'
import { ProductAdvantagesItem } from '../productAdvantagesItem/ProductAdvantagesItem'

export const ProductAdvantages = ({ advantages }: ProductAdvantagesProps): JSX.Element => {
  return (
    <>
      <Htag tag="h2">Преимущества</Htag>
      <div>
        {advantages.map((a) => (
          <div key={a._id} className={styles.advantage}>
            <ProductAdvantagesItem title={a.title} descr={a.description} />
          </div>
        ))}
      </div>
    </>
  )
}
