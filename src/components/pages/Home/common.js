import styled from '@emotion/styled'

export const TableRow = styled.div`
  cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
  position: relative;

  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px;

  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
export const RowTitle = styled.h4`
  margin-top: 0;
`
