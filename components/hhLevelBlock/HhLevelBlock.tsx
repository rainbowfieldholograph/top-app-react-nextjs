import { HhLevelsBlockProps, LevelsEnum } from './HhLevelBlock.props'
import styles from './HhLevelBlock.module.css'
import { SvgIcon } from '../svgIcon/SvgIcon'
import { priceRu } from '../../helpers/Helpers'

export const HhLevelBlock = ({
  salary,
  rate,
  className,
  ...rest
}: HhLevelsBlockProps): JSX.Element => {
  let title: string = 'Начальный'
  switch (rate) {
    case LevelsEnum.Middle:
      title = 'Средний'
      break
    case LevelsEnum.Senior:
      title = 'Профессионал'
      break
  }
  return (
    <div className={`${styles.wrapper} ${className}`} {...rest}>
      <div className={styles.title}>{title}</div>
      <div className={styles.salaryValue}>{priceRu(salary)}</div>
      <div className={styles.rate}>
        <SvgIcon className={styles.filled} type="rate" />
        <SvgIcon className={`${rate >= LevelsEnum.Middle && styles.filled}`} type="rate" />
        <SvgIcon className={`${rate >= LevelsEnum.Senior && styles.filled}`} type="rate" />
      </div>
    </div>
  )
}
