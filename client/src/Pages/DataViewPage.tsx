import {FC} from "react";
import {StyledHeader} from "../styled/general";
import Table from "../Components/Table/Table";

const DataViewPage:FC = () => {
    return (
        <>
            <StyledHeader>Data View Page</StyledHeader>
            <Table thead={['id','string']} tbody={[{id:'ssss',string:'ks emak'},{id:'ssss1',string:'ks emak'},{id:'ssss2',string:'ks emak'}]}/>
        </>
    );
};

export default DataViewPage;