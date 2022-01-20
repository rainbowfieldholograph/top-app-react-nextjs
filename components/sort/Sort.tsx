import { SortEnum, SortProps } from './Sort.props'
import styles from './Sort.module.css'
import { SvgIcon } from '../svgIcon/SvgIcon'

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={`${styles.sort} ${className}`} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={`${sort === SortEnum.Rating && styles.active}`}
      >
        <SvgIcon className={styles.sortIcon} type="sort" /> По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={`${sort === SortEnum.Price && styles.active}`}
      >
        <SvgIcon className={styles.sortIcon} type="sort" /> По&nbsp;цене
      </span>
    </div>
  )
}
