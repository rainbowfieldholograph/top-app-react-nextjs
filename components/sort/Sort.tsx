import { SortEnum, SortProps } from './Sort.props'
import styles from './Sort.module.css'
import { SvgIcon } from '../svgIcon/SvgIcon'
import { IconTypes } from '../svgIcon/SvgIcon.props'
import { KeyboardEvent } from 'react'

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={[styles.sort, className].join(' ')} {...props}>
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={sort === SortEnum.Rating ? styles.active : ''}
      >
        <SvgIcon className={styles.sortIcon} iconType={IconTypes.sort} /> По рейтингу
      </button>
      <button
        tabIndex={0}
        onClick={() => setSort(SortEnum.Price)}
        className={sort === SortEnum.Price ? styles.active : ''}
      >
        <SvgIcon className={styles.sortIcon} iconType={IconTypes.sort} /> По цене
      </button>
    </div>
  )
}
