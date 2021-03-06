import {FC, MouseEventHandler} from "react";
import {FlexContainer, StyledButton, StyledHeader} from "../styled/general";
import styled from "styled-components";
import useFile from "../Hooks/useFile";
import FileService from "../Services/FileService";
import useLoading from "../Hooks/useLoading";
import LoaderError from "../Components/UI/LoaderError";
import {AxiosResponse} from "axios"
import { useNavigate } from "react-router-dom";
import {NavigateFunction} from "react-router";
import {App_Routes} from "../Router";

const StyledInput = styled.input`
  border: 1px solid black;
  width: 100%;
  border-radius: 5px;
`;




const BrowsePage: FC = () => {
    const [handleFileChange, fileName, file, error, reset, inputRef] = useFile('Csv File', 'Invalid File');
    const {isLoading, isError, setError, setLoading, unsetError} = useLoading();
    let navigate:NavigateFunction = useNavigate();

    const onClickHandler: MouseEventHandler<HTMLButtonElement> = async function (evt) {

        setLoading(true);
        FileService.upload(file, {
            fileName: 'file',
            url: '/upload',
        }).then(function (res:AxiosResponse) {
            setLoading(false)
            let data = res.data;
            if(data.success) {
                navigate(App_Routes.dataPage2)
            }
        }).catch(function (err) {
            setError(err.toString());
        });
    }

    const onResetClick: MouseEventHandler<HTMLButtonElement> = function (evt) {
        setLoading(false);
        unsetError();
        reset();
    }

    return (
        <>
            <StyledHeader>Browser Page</StyledHeader>
            <FlexContainer>
                <StyledInput type="file"
                             accept="csv"
                             onChange={handleFileChange}
                             ref={inputRef as any}
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
            <LoaderError isLoading={isLoading} isError={isError}/>

        </>
    );
};

export default BrowsePage;