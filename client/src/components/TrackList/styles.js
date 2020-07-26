import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f1f1f1;
  transition: all .2s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableCell = styled.td`
  padding: 15px 10px;
`;
