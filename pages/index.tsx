import { GetStaticProps } from 'next'
import { useState } from 'react'
import { withLayout } from '../layout/layout/Layout'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface'
import { API } from '../helpers/api'

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(0)
  return <></>
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
