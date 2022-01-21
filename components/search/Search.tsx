import { SearchProps } from './Search.props'
import styles from './Search.module.css'
import { Input } from '../input/Input'
import { Button } from '../button/Button'
import { KeyboardEvent, useState } from 'react'
import { SvgIcon } from '../svgIcon/SvgIcon'
import { useRouter } from 'next/router'

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
    <div className={`${styles.search} ${className}`} {...rest}>
      <Input
        className={styles.input}
        value={search}
        placeholder="Поиск..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button appearance="primary" className={styles.button} onClick={goToSearch}>
        <SvgIcon type="glass" />
      </Button>
    </div>
  )
}
