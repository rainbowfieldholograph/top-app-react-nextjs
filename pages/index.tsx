import { GetStaticProps } from 'next'
import { withLayout } from '../layout/layout/Layout'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface'
import { API } from '../helpers/api'
import { Htag } from '../components/htag/Htag'
import { Ptag } from '../components/ptag/Ptag'
import Image from 'next/image'
import styles from './index.module.css'
import promoImage from '../img/promo.png'

function Home({}: HomeProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Htag className={styles.heading} tag="h1">
        Обучайся с нами!
      </Htag>
      <div className={styles.content}>
        <Ptag size="large">
          Подборки лучших курсов и рейтинги, основанные на реальных отзывах.
        </Ptag>
        <Image className={styles.image} src={promoImage} alt="promo" />
      </div>
    </div>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory })
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
