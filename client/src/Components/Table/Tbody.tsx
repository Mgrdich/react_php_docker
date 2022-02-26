import {FC} from "react";
import styled from "styled-components";

const StyledTd = styled.td`
  padding: 12px 15px;
`;

interface IStyledTr {
    active?:boolean;
}

const StyledTr = styled.tr<IStyledTr>`
  border-bottom: 1px solid #dddddd;
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  &:last-of-type {
    border-bottom: 2px solid black;
  }
`;

interface ITbody {
    data: Array<any>;
}

const Tbody: FC<ITbody> = ({data}) => {
    return (
        <tbody>
        {
            data.map(item => {
                    let tdData: string[] = Object.keys(item);
                    return (
                        <StyledTr key={item.id}>
                            {
                                tdData.map(td => (
                                    <StyledTd key={td}>{item[td]}</StyledTd>
                                ))
                            }
                        </StyledTr>
                    )
                }
            )
        }
        </tbody>
    );
};

export default Tbody;