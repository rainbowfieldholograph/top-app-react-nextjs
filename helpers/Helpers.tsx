import { SvgIcon } from '../components/svgIcon/SvgIcon'
import { IconTypes } from '../components/svgIcon/SvgIcon.props'
import { FirstLevelMenuItem } from '../interfaces/menu.interface'
import { TopLevelCategory } from '../interfaces/page.interface'

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <SvgIcon iconType={IconTypes.courses} />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <SvgIcon iconType={IconTypes.services} />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <SvgIcon iconType={IconTypes.books} />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <SvgIcon iconType={IconTypes.product} />,
    id: TopLevelCategory.Products,
  },
]

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽')

export const declOfNum = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
  ]
}
