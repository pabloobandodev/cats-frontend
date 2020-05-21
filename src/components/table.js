import React from "react";
import styled from "@emotion/styled";

const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  letter-spacing: 1px;
`;

const Th = styled.th`
  background: rgba(0, 0, 0, 0.07);
  padding: 0.8rem;
  font-size: 16px;
`;

const Tr = styled.tr`
  font-size: 16px;
  cursor: ${(props) => (props.onClick ? "pointer" : "auto")};
  &:hover {
    background: rgba(0, 0, 0, 0.07);
  }
`;

const Td = styled.td`
  padding: 1.1rem;
`;

function Table({ columns, data, onClick }) {
  const renderHeaderColumns = () =>
    columns?.map((column, index) => <Th key={index}>{column}</Th>);

  const renderBodyRows = () =>
    data?.map((row, index) => (
      <Tr key={index} onClick={onClick ? () => onClick(row) : null}>
        {row?.map((value, index) => (
          <Td key={index}>{value}</Td>
        ))}
      </Tr>
    ));

  return (
    <StyledTable>
      <thead>
        <tr>{renderHeaderColumns()}</tr>
      </thead>
      <tbody>{renderBodyRows()}</tbody>
    </StyledTable>
  );
}

export default Table;
