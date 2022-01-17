import { useContext } from 'react'
import { AppContext } from '../../../context/app.context'
import { MenuSecondLevelProps } from './MenuSecondLevel.props'
import styles from './MenuSecondLevel.module.css'
import { MenuThirdLevel } from '../MenuThirdLevel/MenuThirdLevel'

export const MenuSecondLevel = ({ menuItem }: MenuSecondLevelProps) => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)
  return (
    <div className={styles.wrapper}>
      {menu.map((m) => {
        return (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div className={`${styles.block} ${m.isOpened && styles.opened}`}>
              <MenuThirdLevel pages={m.pages} route={menuItem.route} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
