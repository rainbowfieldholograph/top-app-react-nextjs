import { useContext } from 'react'
import { AppContext } from '../../../context/app.context'
import { MenuFirstLevelProps } from './MenuFirstLevel.props'
import styles from './MenuFirstLevel.module.css'
import { MenuSecondLevel } from '../menuSecondLevel/MenuSecondLevel'
import Link from 'next/link'

export const MenuFirstLevel = ({ firstLevelMenu }: MenuFirstLevelProps): JSX.Element => {
  const { firstCategory } = useContext(AppContext)
  return (
    <>
      {firstLevelMenu.map((menu) => {
        const isActive = menu.id === firstCategory
        return (
          <div key={menu.route}>
            <Link href={`/${menu.route}`}>
              <a>
                <div className={[styles.firstLevel, isActive ? styles.active : ''].join(' ')}>
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
            </Link>
            {isActive && <MenuSecondLevel menuItem={menu} />}
          </div>
        )
      })}
    </>
  )
}
