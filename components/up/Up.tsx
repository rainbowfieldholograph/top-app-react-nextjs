import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useScrollY } from '../../hooks/useScrollY'
import { ButtonIcon } from '../buttonIcon/ButtonIcon'
import { IconTypes } from '../svgIcon/SvgIcon.props'
import styles from './Up.module.css'

export const Up = (): JSX.Element => {
  const controls = useAnimation()
  const y = useScrollY()

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight })
  }, [y, controls])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.div animate={controls} initial={{ opacity: 0 }}>
      <ButtonIcon
        className={styles.up}
        onClick={scrollToTop}
        appearance="white"
        icon={IconTypes.up}
        aria-label="Наверх"
      />
    </motion.div>
  )
}
