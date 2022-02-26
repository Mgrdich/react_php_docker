import styled from "styled-components";
import Loader from "./Loader";
import {FC} from "react";

const StyledResult = styled.div`
  text-align: center;
  margin: 50px auto;

  * {
    font-size: 50px;
    color: var(--text-secondary-color);
  }
`;

interface ILoaderError {
    isLoading: boolean;
    isError: boolean;
}

const LoaderError: FC<ILoaderError> = ({isError, isLoading}) => {
    return (
        <StyledResult>
            {isLoading && <Loader/>}
            {isError && <span>Something went Wrong</span>}
        </StyledResult>
    );
};

export default LoaderError;