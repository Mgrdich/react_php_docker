import React, {FC} from 'react';
import styled from "styled-components";

const StyledTr = styled.tr`
  background-color: black;
  color: #ffffff;
  text-align: left;
`;

const StyledTh = styled.th`
  padding: 12px 15px;
`;

interface IThead {
    data: string[];
}


const Thead: FC<IThead> = ({data}) => {
    return (
        <thead>
        <StyledTr>
            {
                data.map(item => <StyledTh key={item}>{item}</StyledTh>)
            }
        </StyledTr>
        </thead>
    );
};

export default Thead;