import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { Button } from '../components/Button/Button'
import { Htag } from '../components/Htag/Htag'
import { Ptag } from '../components/Ptag/Ptag'
import { Rating } from '../components/Rating/Rating'
import { Tag } from '../components/Tag/Tag'
import { withLayout } from '../layout/Layout'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface'

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(0)

  useEffect(() => {
    return function cleanup() {
      console.log('unmount')
    }
  }, [])

  return (
    <>
      <Htag tag="h1">ahhahahha</Htag>
      <Button appearance="ghost" className="sdajhsdabks" arrow="right">
        Кнопка
      </Button>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Ptag size="small">hello</Ptag>
      <Tag size="small">Ghost s</Tag>
      <Tag size="medium" color="red">
        Red m
      </Tag>
      <Tag size="medium" color="green">
        Green m
      </Tag>
      <Tag size="medium" color="primary">
        Primary m
      </Tag>
      <Tag size="medium" color="gray">
        Gray m
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable={true} />
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  )
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
