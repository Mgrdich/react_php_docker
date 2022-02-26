import {FC} from "react";
import {StyledHeader} from "../styled/general";
import Table from "../Components/Table/Table";
import useTable from "../Hooks/useTable";
import LoaderError from "../Components/UI/LoaderError";

const DataViewParsedPage: FC = () => {
    const {isLoading, isError, tbody, thead} = useTable('/files');

    return (
        <>
            <StyledHeader>Data View Parsed Page</StyledHeader>
            <LoaderError isLoading={isLoading} isError={isError}/>
            {tbody.length?<Table thead={thead} tbody={tbody}/>:null}
        </>
    );
};

export default DataViewParsedPage;