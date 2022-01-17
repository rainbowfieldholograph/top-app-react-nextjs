import { useContext } from 'react'
import { AppContext } from '../../../context/app.context'
import { MenuFirstLevelProps } from './MenuFirstLevel.props'
import styles from './MenuFirstLevel.module.css'
import { MenuSecondLevel } from '../MenuSecondLevel/MenuSecondLevel'

export const MenuFirstLevel = ({ firstLevelMenu }: MenuFirstLevelProps): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)
  return (
    <>
      {firstLevelMenu.map((menu) => {
        const isActive = menu.id === firstCategory
        return (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div className={`${styles.firstLevel} ${isActive && styles.active}`}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            {isActive && <MenuSecondLevel menuItem={menu} />}
          </div>
        )
      })}
    </>
  )
}
