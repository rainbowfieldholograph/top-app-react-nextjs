import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { API } from '../../helpers/api'
import { firstLevelMenu } from '../../helpers/Helpers'
import { MenuItem } from '../../interfaces/menu.interface'
import { withLayout } from '../../layout/layout/Layout'

const Type = ({ firstCategory }: TypeProps): JSX.Element => {
  return <div>Type: {firstCategory}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => '/' + m.route),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) return { notFound: true }
  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type)
  if (!firstCategoryItem) return { notFound: true }
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id,
  })
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  }
}

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}

export default withLayout(Type)
