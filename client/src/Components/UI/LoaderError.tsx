import Loader from "./Loader";
import {FC} from "react";
import {StyledResult} from "../../styled/general";

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