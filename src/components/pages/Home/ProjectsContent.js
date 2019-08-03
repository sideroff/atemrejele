import React from 'react'

import { TableRow, RowTitle } from './common'

export default ({ projects }) => {
  return projects.map(p => (
    <TableRow key={p.id}>
      <RowTitle>{p.name}</RowTitle>
      <div>{p.description}</div>
    </TableRow>
  ))
}