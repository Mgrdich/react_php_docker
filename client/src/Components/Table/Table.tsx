import Tbody from "./Tbody";
import Thead from "./Thead";
import {FC} from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
`;

interface ITable {
    thead: string[];
    tbody: Array<any>;
}

const Table: FC<ITable> = ({tbody, thead}) => {
    return (
        <StyledTable>
            <Thead data={thead}/>
            <Tbody data={tbody}/>
        </StyledTable>
    );
};

export default Table;