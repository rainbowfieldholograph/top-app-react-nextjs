import { useContext } from 'react'
import { AppContext } from '../../../context/app.context'
import { MenuFirstLevelProps } from './MenuFirstLevel.props'
import styles from './MenuFirstLevel.module.css'
import { MenuSecondLevel } from '../menuSecondLevel/MenuSecondLevel'
import { TopLevelCategory } from '../../../interfaces/page.interface'

export const MenuFirstLevel = ({ firstLevelMenu }: MenuFirstLevelProps): JSX.Element => {
  const { firstCategory, setFirstCategory } = useContext(AppContext)
  return (
    <ul>
      {firstLevelMenu.map((menu) => {
        const isActive = menu.id === firstCategory
        return (
          <li key={menu.route} aria-expanded={isActive}>
            <button
              onClick={() =>
                setFirstCategory &&
                (isActive
                  ? setFirstCategory(TopLevelCategory.NotSelected)
                  : setFirstCategory(menu.id))
              }
            >
              <div className={[styles.firstLevel, isActive ? styles.active : ''].join(' ')}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </button>
            {isActive && <MenuSecondLevel menuItem={menu} />}
          </li>
        )
      })}
    </ul>
  )
}
