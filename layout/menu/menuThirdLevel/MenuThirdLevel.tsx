import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './MenuThirdLevel.module.css'
import { MenuThirdLevelProps } from './MenuThirdLevel.props'

export const MenuThirdLevel = ({
  pages,
  route,
  isOpened,
}: MenuThirdLevelProps): JSX.Element => {
  const router = useRouter()
  const shouldReduceMotion = useReducedMotion()

  const animationChildren = {
    visible: { opacity: 1, height: '100%' },
    hidden: { opacity: shouldReduceMotion ? 1 : 0, height: '0px' },
  }

  return (
    <>
      {pages.map((p) => {
        const routePath = `/${route}/${p.alias}`
        return (
          <motion.li key={p._id} variants={animationChildren}>
            <Link href={routePath}>
              <a
                tabIndex={isOpened ? 0 : -1}
                className={[
                  styles.thirdLevel,
                  routePath === router.asPath ? styles.active : '',
                ].join(' ')}
                aria-current={`/${route}/${p.alias}` === router.asPath ? 'page' : false}
              >
                {p.category}
              </a>
            </Link>
          </motion.li>
        )
      })}
    </>
  )
}
