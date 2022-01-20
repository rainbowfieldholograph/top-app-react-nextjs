import { HhDataProps } from './HhData.props'
import styles from './HhData.module.css'
import { Card } from '../card/Card'
import { HhLevelBlock } from '../hhLevelBlock/HhLevelBlock'

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
        <HhLevelBlock rate={1} salary={juniorSalary} />
        <HhLevelBlock rate={2} salary={middleSalary} />
        <HhLevelBlock rate={3} salary={seniorSalary} />
      </Card>
    </div>
  )
}
