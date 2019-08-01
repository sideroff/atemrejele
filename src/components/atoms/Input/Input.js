import React from 'react'
import styled from '@emotion/styled'

import { primaryColorWithOpacity } from 'config/styleConfig'

const StyledInput = styled.input`
  border: 1px solid ${primaryColorWithOpacity(0.3)};

  border-radius: 2.5px;
  padding: 8px 10px;
  box-sizing: border-box;

  width: ${props => props.type === 'submit'
    ? 'auto'
    : '100%'
  };

  font-size: 16px;
  &:active, &:focus {
    box-shadow: 0px 0px 0px 1px ${primaryColorWithOpacity(0.3)};
  }
`
export default props => <StyledInput {...props} {...props.input} />