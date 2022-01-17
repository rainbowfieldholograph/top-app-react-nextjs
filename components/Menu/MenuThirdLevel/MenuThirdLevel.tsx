import styles from './MenuThirdLevel.module.css'
import { MenuThirdLevelProps } from './MenuThirdLevel.props'

export const MenuThirdLevel = ({ pages, route }: MenuThirdLevelProps): JSX.Element => {
  return (
    <>
      {pages.map((p) => (
        <a
          href={`/${route}/${p.alias}`}
          className={`${styles.thirdLevel} ${false && styles.active}`}
        >
          {p.category}
        </a>
      ))}
    </>
  )
}
