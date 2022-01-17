import styles from './Menu.module.css'
import { useContext } from 'react'
import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem } from '../../interfaces/menu.interface'
import { TopLevelCategory } from '../../interfaces/page.interface'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { MenuFirstLevel } from './MenuFirstLevel/MenuFirstLevel'

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <SvgIcon type="courses" />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <SvgIcon type="services" />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <SvgIcon type="books" />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <SvgIcon type="product" />,
    id: TopLevelCategory.Products,
  },
]

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  return (
    <div className={styles.menu}>
      <MenuFirstLevel firstLevelMenu={firstLevelMenu} />
    </div>
  )
}
