import { AdvantagesProps } from './Advantages.props'
import styles from './Advantages.module.css'
import { Htag } from '../htag/Htag'
import { AdvantagesItem } from '../advantagesItem/AdvantagesItem'

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      <Htag tag="h2">Преимущества</Htag>
      <div>
        {advantages.map((a) => (
          <div key={a._id} className={styles.advantage}>
            <AdvantagesItem title={a.title} descr={a.description} />
          </div>
        ))}
      </div>
    </>
  )
}
