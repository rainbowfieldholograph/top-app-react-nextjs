import { SvgIcon } from '../components/svgIcon/SvgIcon'
import { FirstLevelMenuItem } from '../interfaces/menu.interface'
import { TopLevelCategory } from '../interfaces/page.interface'

export const firstLevelMenu: FirstLevelMenuItem[] = [
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
