import { GetStaticProps } from 'next'
import { useState } from 'react'
import { Button } from '../components/button/Button'
import { Htag } from '../components/htag/Htag'
import { Ptag } from '../components/ptag/Ptag'
import { Rating } from '../components/rating/Rating'
import { Tag } from '../components/tag/Tag'
import { withLayout } from '../layout/Layout'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface'
import { Input } from '../components/input/Input'
import { Textarea } from '../components/textarea/Textarea'
import { ReviewForm } from '../components/reviewForm/ReviewForm'
import { API } from '../helpers/api'

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(0)

  return (
    <>
      <Htag tag="h1">ahhahahha</Htag>
      <Button appearance="ghost" className="sdajhsdabks">
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
      <Input placeholder="ok" />
      <Textarea />
    </>
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
