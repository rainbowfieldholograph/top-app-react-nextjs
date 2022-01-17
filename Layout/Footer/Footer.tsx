import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import { Ptag } from '../../components/ptag/Ptag'
import { format } from 'date-fns'

export const Footer = ({ className, ...rest }: FooterProps): JSX.Element => {
  return (
    <footer className={`${styles.footer} ${className}`} {...rest}>
      <Ptag size="medium">OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</Ptag>
      <>
        <a href="#" target="_blank">
          Пользовательское соглашение
        </a>
        <a href="#" target="_blank">
          Политика конфиденциальности
        </a>
      </>
    </footer>
  )
}
