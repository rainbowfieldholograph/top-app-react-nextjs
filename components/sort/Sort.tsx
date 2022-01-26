import { SortEnum, SortProps } from './Sort.props'
import styles from './Sort.module.css'
import { SvgIcon } from '../svgIcon/SvgIcon'
import { IconTypes } from '../svgIcon/SvgIcon.props'

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={[styles.sort, className].join(' ')} {...props}>
      <h2 className={styles.sortName} id="sort">
        Сортировка
      </h2>
      <button
        id="rating"
        onClick={() => setSort(SortEnum.Rating)}
        className={sort === SortEnum.Rating ? styles.active : ''}
        aria-selected={sort === SortEnum.Rating}
        aria-labelledby="sort rating"
      >
        <SvgIcon className={styles.sortIcon} iconType={IconTypes.sort} /> По рейтингу
      </button>
      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={sort === SortEnum.Price ? styles.active : ''}
        aria-selected={sort === SortEnum.Price}
        aria-labelledby="sort price"
      >
        <SvgIcon className={styles.sortIcon} iconType={IconTypes.sort} /> По цене
      </button>
    </div>
  )
}
