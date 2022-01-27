import React from 'react'
import { Htag } from '../components/htag/Htag'
import { withLayout } from '../layout/layout/Layout'

export const Error404 = (): JSX.Element => {
  return (
    <div>
      <Htag tag="h1">Ошибка 404</Htag>
    </div>
  )
}

export default withLayout(Error404)
