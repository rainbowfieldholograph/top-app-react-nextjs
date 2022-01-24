import { SvgIcon } from '../svgIcon/SvgIcon'
import { IconTypes } from '../svgIcon/SvgIcon.props'
import styles from './AdvantagesItem.module.css'
import { AdventuresItemProps } from './AdvantagesItem.props'

export const AdvantagesItem = ({ title, descr }: AdventuresItemProps): JSX.Element => {
  return (
    <div className={styles.advantage}>
      <SvgIcon iconType={IconTypes.check} />
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
