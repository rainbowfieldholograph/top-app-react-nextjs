import { HhLevelsBlockProps } from './HhLevelBlock.props'
import styles from './HhLevelBlock.module.css'
import { SvgIcon } from '../svgIcon/SvgIcon'

const enum Levels {
  Junior = 1,
  Middle,
  Senior,
}

export const HhLevelBlock = ({
  salary,
  rate,
  className,
  ...rest
}: HhLevelsBlockProps): JSX.Element => {
  let title: string = 'Начальный'
  switch (rate) {
    case Levels.Middle:
      title = 'Средний'
      break
    case Levels.Senior:
      title = 'Профессионал'
      break
  }
  return (
    <div className={`${styles.wrapper} ${className}`} {...rest}>
      <div className={styles.title}>{title}</div>
      <div className={styles.salaryValue}>{salary}</div>
      <div className={styles.rate}>
        <SvgIcon className={styles.filled} type="rate" />
        <SvgIcon className={`${rate >= Levels.Middle && styles.filled}`} type="rate" />
        <SvgIcon className={`${rate >= Levels.Senior && styles.filled}`} type="rate" />
      </div>
    </div>
  )
}