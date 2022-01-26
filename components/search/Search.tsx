import { SearchProps } from './Search.props'
import styles from './Search.module.css'
import { Input } from '../input/Input'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { IconTypes } from '../svgIcon/SvgIcon.props'
import { ButtonIcon } from '../buttonIcon/ButtonIcon'

export const Search = ({ className, children, ...rest }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('')
  const router = useRouter()

  const goToSearch = (event: FormEvent) => {
    event.preventDefault()
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    })
  }

  return (
    <form
      onSubmit={goToSearch}
      className={[styles.search, className].join(' ')}
      {...rest}
      role="search"
    >
      <Input
        className={styles.input}
        value={search}
        placeholder="Поиск..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ButtonIcon
        className={styles.button}
        icon={IconTypes.glass}
        appearance="primary"
        aria-label="Искать по сайту"
        type="submit"
      />
    </form>
  )
}
