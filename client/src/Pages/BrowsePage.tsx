import {FC, MouseEventHandler} from "react";
import {FlexContainer, StyledHeader} from "../styled/general";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid black;
  width: 100%;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background-color: black;
  color: var(--text-color);
  border-radius: 3px;
  min-width: 120px;
  height: 27px;
  border: none;
  cursor: pointer;
  &:hover {
    color: var(--hover-text-color);
  }
`;

const BrowsePage: FC = () => {

    const onClickHandler:MouseEventHandler<HTMLButtonElement> = function (evt) {
        console.log("Submitted");
    }

    return (
        <>
            <StyledHeader>Browser Page</StyledHeader>
            <FlexContainer>
                <StyledInput type="file" accept="csv"/>
                <StyledButton onClick={onClickHandler}> Submit </StyledButton>
            </FlexContainer>
        </>
    );
};

export default BrowsePage;