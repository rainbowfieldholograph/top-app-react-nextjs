import { Htag } from '../../components/htag/Htag'
import { Tag } from '../../components/tag/Tag'
import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'
import { HhData } from '../../components/hhData/HhData'
import { TopLevelCategory } from '../../interfaces/page.interface'
import { ProductAdvantages } from '../../components/productAdvantages/ProductAdvantages'
import { Ptag } from '../../components/ptag/Ptag'

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="gray" size="medium">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="medium">
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && (
        <ProductAdvantages advantages={page.advantages} />
      )}
      {page.seoText && <Ptag>{page.seoText}</Ptag>}
      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  )
}
