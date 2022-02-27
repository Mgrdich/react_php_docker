import Tbody from "./Tbody";
import Thead from "./Thead";
import {FC} from "react";
import styled from "styled-components";
import {StyledButton} from "../../styled/general";
import {paginationLinkTypes} from "../../Hooks/useTable";

const StyledDiv = styled.div`
  overflow: auto;
`

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
`;

const StyledPaginationCon = styled.div`
  display: flex;
  justify-content: flex-end;
`

interface ITable {
    thead: string[];
    tbody: Array<any>;
    setPagination?: (s: paginationLinkTypes) => void;
    paginationLinks?: any; //TODO fix later not time
}

const Table: FC<ITable> = ({tbody, thead, setPagination, paginationLinks={}}) => {
    console.log(!paginationLinks['next']);
    return (

        <StyledDiv>
            <StyledTable>
                <Thead data={thead}/>
                <Tbody data={tbody}/>
            </StyledTable>
            {
                setPagination ? (
                    <StyledPaginationCon>
                        <StyledButton disabled={!paginationLinks['prev']} onClick={() => setPagination('prev')}
                                      minWidth="80px" margin="0 0 0 10px"> Prev </StyledButton>
                        <StyledButton disabled={!paginationLinks['first']} onClick={() => setPagination('first')}
                                      minWidth="80px" margin="0 0 0 10px"> first </StyledButton>
                        <StyledButton disabled={!paginationLinks['last']} onClick={() => setPagination('last')}
                                      minWidth="80px" margin="0 0 0 10px"> last </StyledButton>
                        <StyledButton disabled={!paginationLinks['next']} onClick={() => setPagination('next')}
                                      minWidth="80px" margin="0 0 0 10px"> Next </StyledButton>
                    </StyledPaginationCon>
                ) : null
            }
        </StyledDiv>
    );
};

export default Table;