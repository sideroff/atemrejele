import React from 'react'
import styled from '@emotion/styled'

import { Spinner } from 'components/atoms'

import { randomIntByMinMax } from 'utils'
import i18n from 'i18n'

import { pinkWithOpacity } from 'config/styleConfig'


import { TableRow, RowTitle } from './common'

const BlurredTextDiv = styled.div`
  text-shadow: 0 0 10px black;
  color: transparent;
`

// once per app load
const randomProjectNumber = randomIntByMinMax(1, 3)
const loadingProjectsMockData = []
for (let i = 0; i < randomProjectNumber; i++) {
  loadingProjectsMockData.push(
    <TableRow disabled={true} key={i}>
      <Spinner color={pinkWithOpacity(0.5)} />
      <RowTitle>
        <BlurredTextDiv>{i18n.t('mock-project-name')}</ BlurredTextDiv>
      </RowTitle>
      <BlurredTextDiv>{i18n.t('mock-project-description')}</ BlurredTextDiv>
    </TableRow>
  )
}

export default () => (
  <BlurredTextDiv>
    {loadingProjectsMockData}
  </ BlurredTextDiv>

)