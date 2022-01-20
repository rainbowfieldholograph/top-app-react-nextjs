import { SvgIcon } from '../svgIcon/SvgIcon'
import styles from './ProductAdvantagesItem.module.css'
import { ProductBenefitsItemProps } from './ProductAdvantagesItem.props'

export const ProductAdvantagesItem = ({
  title,
  descr,
}: ProductBenefitsItemProps): JSX.Element => {
  return (
    <div className={styles.advantage}>
      <SvgIcon type="check" />
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <hr className={styles.vline} />
      <div>
        <p>{descr}</p>
      </div>
    </div>
  )
}
