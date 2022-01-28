import { createContext, PropsWithChildren, useState } from 'react'
import { MenuItem } from '../interfaces/menu.interface'
import { TopLevelCategory } from '../interfaces/page.interface'

export interface IAppContext {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
  setMenu?: (newMenu: MenuItem[]) => void
  setFirstCategory?: (newFirstCategory: TopLevelCategory) => void
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
})

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu)
  const [firstCategoryState, setFirstCategoryState] = useState<TopLevelCategory>(firstCategory)

  const setFirstCategory = (newFirstCategory: TopLevelCategory): void =>
    setFirstCategoryState(newFirstCategory)

  const setMenu = (newMenu: MenuItem[]): void => setMenuState(newMenu)

  return (
    <AppContext.Provider
      value={{ menu: menuState, firstCategory: firstCategoryState, setMenu, setFirstCategory }}
    >
      {children}
    </AppContext.Provider>
  )
}
