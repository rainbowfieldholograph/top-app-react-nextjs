import { FC, useState, KeyboardEvent, useRef } from 'react'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'
import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'
import { AppContextProvider, IAppContext } from '../context/app.context'
import { Up } from '../components/up/Up'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false)
  const bodyRef = useRef<HTMLDivElement>(null)

  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault()
      bodyRef.current?.focus()
    }
    setIsSkipLinkDisplayed(false)
  }

  return (
    <div className={styles.wrapper}>
      <div
        onFocus={() => setIsSkipLinkDisplayed(true)}
        tabIndex={1}
        className={[styles.skipLink, isSkipLinkDisplayed ? styles.displayed : ''].join(' ')}
        onKeyDown={skipContentAction}
      >
        Сразу к содержанию
      </div>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.body} ref={bodyRef} tabIndex={0}>
        <div>{children}</div>
      </main>
      <Footer className={styles.footer} />
      <Up />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    )
  }
}
