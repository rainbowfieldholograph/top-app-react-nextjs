import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import { SvgIcon } from '../../components/svgIcon/SvgIcon'
import { IconTypes } from '../../components/svgIcon/SvgIcon.props'
import { ButtonIcon } from '../../components/buttonIcon/ButtonIcon'
import { motion } from 'framer-motion'
import { Sidebar } from '../sidebar/Sidebar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const Header = ({ className, ...rest }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    setIsOpened(false)
  }, [router])

  const animationVariants = {
    opened: { opacity: 1, x: 0, transition: { stiffness: 20 } },
    closed: { opacity: 0, x: '100%' },
  }

  return (
    <header className={[styles.header, className].join(' ')} {...rest}>
      <SvgIcon iconType={IconTypes.logo} />
      <ButtonIcon
        className={styles.buttonIcon}
        appearance="white"
        icon={IconTypes.menu}
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={animationVariants}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearance="white"
          icon={IconTypes.closeAlt}
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  )
}
