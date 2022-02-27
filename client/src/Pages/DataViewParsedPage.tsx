import {FC} from "react";
import {StyledHeader} from "../styled/general";
import Table from "../Components/Table/Table";
import useTable from "../Hooks/useTable";
import LoaderError from "../Components/UI/LoaderError";
import NoDataFound from "../Components/UI/NoDataFound";

const DataViewParsedPage: FC = () => {
    const {isLoading, isError, tbody, thead, setPagination, paginationLinks} = useTable('/domains');

    return (
        <>
            <StyledHeader>Data View Parsed Page</StyledHeader>
            <LoaderError isLoading={isLoading} isError={isError}/>
            {tbody.length ?
                <Table thead={thead} tbody={tbody} setPagination={setPagination} paginationLinks={paginationLinks}/> :
                <NoDataFound/>}
        </>
    );
};

export default DataViewParsedPage;