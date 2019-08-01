import styled from '@emotion/styled'

import { primaryColorWithOpacity, white } from 'config/styleConfig'

export default styled.button`
  border: 1px solid ${primaryColorWithOpacity(0.3)};
  border-radius: 2.5px;
  padding: 8px 10px;

  font-size: 14px;
  font-weight: bold;

  color: ${props => props.$type === 'primary'
    ? white
    : primaryColorWithOpacity(0.7)
  };
  background-color: ${props => props.$type === 'primary'
    ? primaryColorWithOpacity(0.7)
    : white
  };
`