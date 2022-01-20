import { HhDataProps } from './HhData.props'
import styles from './HhData.module.css'
import { Card } from '../card/Card'
import { HhLevelBlock } from '../hhLevelBlock/HhLevelBlock'
import { LevelsEnum } from '../hhLevelBlock/HhLevelBlock.props'

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего ваканский</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <HhLevelBlock rate={LevelsEnum.Junior} salary={juniorSalary} />
        <HhLevelBlock rate={LevelsEnum.Middle} salary={middleSalary} />
        <HhLevelBlock rate={LevelsEnum.Senior} salary={seniorSalary} />
      </Card>
    </div>
  )
}
