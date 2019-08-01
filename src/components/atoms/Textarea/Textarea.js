import React from 'react'
import styled from '@emotion/styled'

import { primaryColorWithOpacity } from 'config/styleConfig'

const StyledTextarea = styled.textarea`
  border: 1px solid ${primaryColorWithOpacity(0.3)};
  resize: vertical;
  min-height: 4em;

  border-radius: 2.5px;
  padding: 8px 10px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;

  &:active, &:focus {
    box-shadow: 0px 0px 0px 1px ${primaryColorWithOpacity(0.3)};
  }
`
export default props => <StyledTextarea {...props} {...props.input} />