import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";


export default forwardRef<HTMLTableElement, TableProps>(function Table(props, ref) {
  return (<TableContainer>
    <TableStyles {...props} ref={ref}>
      <caption>{props.caption}</caption>
      {props.children}
    </TableStyles>
  </TableContainer>
  );
})

const TableContainer = styled.div`
width: 90%;
overflow-x: scroll;
text-align: left;
box-shadow: 2px 2px 6px 2px ${({ theme }) => theme.colors.shadow};
margin: 50px 0;
border: 2px solid ${({ theme }) => theme.colors.shadow};
border-radius: 20px;
text-transform: capitalize;
`

const TableStyles = styled.table`
  width: 100%;
  margin-bottom: ${({theme}) => theme.spacing  * 2}px;
  border: 1px solid black;
  padding: ${({theme}) => theme.spacing  * 2}px;
  border-collapse: collapse;
  border-style: hidden;

  caption {
    margin: 10px 0px;
    padding-left: ${({theme}) => theme.spacing}px;
    font-weight: bold;
  }

  thead {
    tr {
      border-bottom: 2px solid black;
    }
  }

  tr {
    border-bottom: 1px solid black;
  }

  th,
  td {
    padding: ${({theme}) => theme.spacing  * 3}px;
  }

  tfoot {
    text-align: right;
  }
`;

export interface TableProps extends ComponentProps<'table'> {
  children: ReactNode;
  /** Text for html caption element */
  caption: string;
}
