import { useContext } from 'react'
import { AppContext } from '../../../context/app.context'
import { MenuSecondLevelProps } from './MenuSecondLevel.props'
import styles from './MenuSecondLevel.module.css'
import { MenuThirdLevel } from '../menuThirdLevel/MenuThirdLevel'
import { useRouter } from 'next/router'

export const MenuSecondLevel = ({ menuItem }: MenuSecondLevelProps) => {
  const { menu, setMenu } = useContext(AppContext)
  const router = useRouter()

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened
          }
          return m
        })
      )
  }

  return (
    <div className={styles.wrapper}>
      {menu.map((m) => {
        if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
          m.isOpened = !m.isOpened
        }
        return (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <div className={`${styles.block} ${m.isOpened && styles.blockOpened}`}>
              <MenuThirdLevel pages={m.pages} route={menuItem.route} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
