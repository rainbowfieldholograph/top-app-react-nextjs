import { useEffect, useState } from 'react'
import { Button } from '../components/Button/Button'
import { Htag } from '../components/Htag/Htag'
import { Ptag } from '../components/Ptag/Ptag'
import { Rating } from '../components/Rating/Rating'
import { Tag } from '../components/Tag/Tag'
import { withLayout } from '../Layout/Layout'

function Home(): JSX.Element {
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
