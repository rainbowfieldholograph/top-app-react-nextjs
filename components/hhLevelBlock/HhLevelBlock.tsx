import { HhLevelsBlockProps, LevelsEnum } from './HhLevelBlock.props'
import styles from './HhLevelBlock.module.css'
import { SvgIcon } from '../svgIcon/SvgIcon'
import { IconTypes } from '../svgIcon/SvgIcon.props'
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
    <div className={[styles.wrapper, className].join(' ')} {...rest}>
      <div className={styles.title}>{title}</div>
      <div className={styles.salaryValue}>{salary && priceRu(salary)}</div>
      <div className={styles.rate}>
        <SvgIcon className={styles.filled} iconType={IconTypes.rate} />
        <SvgIcon
          className={`${rate >= LevelsEnum.Middle && styles.filled}`}
          iconType={IconTypes.rate}
        />
        <SvgIcon
          className={`${rate >= LevelsEnum.Senior && styles.filled}`}
          iconType={IconTypes.rate}
        />
      </div>
    </div>
  )
}
