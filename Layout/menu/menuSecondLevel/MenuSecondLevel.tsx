import { useContext, KeyboardEvent } from 'react'
import { AppContext } from '../../../context/app.context'
import { MenuSecondLevelProps } from './MenuSecondLevel.props'
import styles from './MenuSecondLevel.module.css'
import { MenuThirdLevel } from '../menuThirdLevel/MenuThirdLevel'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export const MenuSecondLevel = ({ menuItem }: MenuSecondLevelProps) => {
  const { menu, setMenu } = useContext(AppContext)
  const router = useRouter()

  const animationVariants = {
    visible: {
      transition: {
        marginBottom: 20,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: { marginBottom: 0 },
  }

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) m.isOpened = !m.isOpened
          return m
        })
      )
  }

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault()
      openSecondLevel(secondCategory)
    }
  }

  return (
    <div className={styles.wrapper}>
      {menu.map((m) => {
        if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
          m.isOpened = !m.isOpened
        }
        return (
          <div key={m._id.secondCategory}>
            <div
              tabIndex={0}
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
              onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <motion.div
              layout
              className={styles.block}
              variants={animationVariants}
              initial={m.isOpened ? 'visible' : 'hidden'}
              animate={m.isOpened ? 'visible' : 'hidden'}
            >
              <MenuThirdLevel
                pages={m.pages}
                route={menuItem.route}
                isOpened={m.isOpened ?? false}
              />
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
