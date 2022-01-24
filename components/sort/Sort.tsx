import { SortEnum, SortProps } from './Sort.props'
import styles from './Sort.module.css'
import { SvgIcon } from '../svgIcon/SvgIcon'
import { IconTypes } from '../svgIcon/SvgIcon.props'

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={[styles.sort, className].join(' ')} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={[sort === SortEnum.Rating ? styles.active : ''].join(' ')}
      >
        <SvgIcon className={styles.sortIcon} iconType={IconTypes.sort} /> По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={[sort === SortEnum.Price ? styles.active : ''].join(' ')}
      >
        <SvgIcon className={styles.sortIcon} iconType={IconTypes.sort} /> По цене
      </span>
    </div>
  )
}
