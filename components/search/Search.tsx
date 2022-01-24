import { SearchProps } from './Search.props'
import styles from './Search.module.css'
import { Input } from '../input/Input'
import { KeyboardEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { IconTypes } from '../svgIcon/SvgIcon.props'
import { ButtonIcon } from '../buttonIcon/ButtonIcon'

export const Search = ({ className, children, ...rest }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('')
  const router = useRouter()

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    })
  }

  const handleKeyDown = (event: KeyboardEvent) => event.key === 'Enter' && goToSearch()

  return (
    <div className={[styles.search, className].join(' ')} {...rest}>
      <Input
        className={styles.input}
        value={search}
        placeholder="Поиск..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <ButtonIcon
        className={styles.button}
        icon={IconTypes.glass}
        appearance="primary"
        onClick={goToSearch}
      />
    </div>
  )
}
