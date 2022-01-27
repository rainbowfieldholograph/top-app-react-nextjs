import React, { ReactElement } from 'react'
import { withLayout } from '../../layout/layout/Layout'

interface Props {}

function Search({}: Props): ReactElement {
  return <div>Search</div>
}

export default withLayout(Search)
