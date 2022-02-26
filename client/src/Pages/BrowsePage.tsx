import {FC, MouseEventHandler} from "react";
import {FlexContainer, StyledHeader} from "../styled/general";
import styled from "styled-components";
import useFile from "../Hooks/useFile";

const StyledInput = styled.input`
  border: 1px solid black;
  width: 100%;
  border-radius: 5px;
`;

interface IStyledButton {
    margin?: string;
}

const StyledButton = styled.button<IStyledButton>`
  background-color: black;
  color: var(--text-color);
  border-radius: 3px;
  min-width: 120px;
  height: 27px;
  border: none;
  cursor: pointer;
  margin: ${({margin}) => margin};

  &:hover {
    color: var(--hover-text-color);
  }
`;

const BrowsePage: FC = () => {
    const [handleFileChange, fileName, file, error, reset] = useFile('Csv File', 'csv', 'Invalid File');

    const onClickHandler: MouseEventHandler<HTMLButtonElement> = function (evt) {
        console.log("Submitted");
    }

    const onResetClick: MouseEventHandler<HTMLButtonElement> = function (evt) {
        reset();
    }

    return (
        <>
            <StyledHeader>Browser Page</StyledHeader>
            <FlexContainer>
                <StyledInput type="file"
                             accept="csv"
                             onChange={handleFileChange}
                />
                <StyledButton onClick={onClickHandler} margin="0 0 0 10px"> Submit </StyledButton>
                <StyledButton onClick={onResetClick} margin="0 0 0 10px"> Reset </StyledButton>
            </FlexContainer>
            {(file && !error.length) && <FlexContainer margin="10px">
                <div>Name: {fileName}</div>
            </FlexContainer>}
            {error.length ? <FlexContainer margin="10px">
                <div>Error: {error}</div>
            </FlexContainer> : null}
        </>
    );
};

export default BrowsePage;