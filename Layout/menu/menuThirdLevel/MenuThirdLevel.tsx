import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './MenuThirdLevel.module.css'
import { MenuThirdLevelProps } from './MenuThirdLevel.props'

export const MenuThirdLevel = ({ pages, route }: MenuThirdLevelProps): JSX.Element => {
  const router = useRouter()
  return (
    <>
      {pages.map((p, index) => {
        const routePath = `/${route}/${p.alias}`
        return (
          <Link key={index} href={routePath}>
            <a className={`${styles.thirdLevel} ${routePath === router.asPath && styles.active}`}>
              {p.category}
            </a>
          </Link>
        )
      })}
    </>
  )
}
