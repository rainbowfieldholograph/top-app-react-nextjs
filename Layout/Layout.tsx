import { FC } from 'react'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'
import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'
import { AppContextProvider, IAppContext } from '../context/app.context'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.body}>
        <div>{children}</div>
      </main>
      <Footer className={styles.footer} />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
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
