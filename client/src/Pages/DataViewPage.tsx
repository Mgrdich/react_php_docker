import {FC} from "react";
import {StyledHeader} from "../styled/general";
import Table from "../Components/Table/Table";
import LoaderError from "../Components/UI/LoaderError";
import useTable from "../Hooks/useTable";

const DataViewPage: FC = () => {
    const {isLoading, isError, tbody, thead, setPagination} = useTable('/files');

    return (
        <>
            <StyledHeader>Data View Page</StyledHeader>
            <LoaderError isLoading={isLoading} isError={isError}/>
            {tbody.length ? <Table thead={thead} tbody={tbody} setPagination={setPagination}/> : null}
        </>
    );
};

export default DataViewPage;