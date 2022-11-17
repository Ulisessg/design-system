import React, { ReactNode } from "react";
import styled from "styled-components";

export default function Table({ caption, children }: TableProps) {
  return (
    <TableStyles>
      <caption>{caption}</caption>
      {children}
    </TableStyles>
  );
}

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

interface TableProps {
  children: ReactNode;
  /** Text for html caption element */
  caption: string;
}
