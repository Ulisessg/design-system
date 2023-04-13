import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";


export default forwardRef<HTMLTableElement, TableProps>(function Table(props, ref) {
  return (
    <TableStyles {...props} ref={ref}>
      <caption>{props.caption}</caption>
      {props.children}
    </TableStyles>
  );
})

const TableStyles = styled.table`
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid black;
  padding: 15px;
  border-collapse: collapse;
  border-style: hidden;

  caption {
    margin: 10px 0px;
    padding-left: 8px;
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
    padding: 20px;
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
