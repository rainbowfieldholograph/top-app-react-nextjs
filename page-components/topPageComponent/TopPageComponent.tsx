import { Htag } from '../../components/htag/Htag'
import { Tag } from '../../components/tag/Tag'
import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'
import { HhData } from '../../components/hhData/HhData'
import { TopLevelCategory } from '../../interfaces/page.interface'
import { Advantages } from '../../components/advantages/Advantages'
import { Sort } from '../../components/sort/Sort'
import { SortEnum } from '../../components/sort/Sort.props'
import { useEffect, useReducer } from 'react'
import { sortReducer } from './sort.reducer'
import { Product } from '../../components/product/Product'
import { useReducedMotion } from 'framer-motion'

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sortMethod: sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sortMethod: SortEnum.Rating,
    }
  )

  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    dispatchSort({ type: 'refresh', initialState: products })
  }, [products])

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort })
  }

  console.log(sort)
  console.log(sortedProducts)

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag aria-label={`${products.length} элементов`} color="gray" size="medium">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div role="list">
        {sortedProducts &&
          sortedProducts.map((p) => (
            <Product
              role="listitem"
              layout={shouldReduceMotion ? false : true}
              key={p._id}
              product={p}
            />
          ))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="medium">
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && (
        <Advantages advantages={page.advantages} />
      )}
      {page.seoText && (
        <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />
      )}
      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  )
}
