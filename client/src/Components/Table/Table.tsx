import Tbody from "./Tbody";
import Thead from "./Thead";
import {FC} from "react";

interface ITable {
    thead: string[];
    tbody: Array<any>;
}

const Table: FC<ITable> = ({tbody, thead}) => {
    return (
        <>
            <Thead data={thead}/>
            <Tbody data={tbody}/>
        </>
    );
};

export default Table;