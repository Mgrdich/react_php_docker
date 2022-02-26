import React, {FC} from 'react';

interface IThead {
    data: string[];
}


const Thead: FC<IThead> = ({data}) => {
    return (
        <thead>
        <tr>
            {
                data.map(item => <th key={item}>{item}</th>)
            }
        </tr>
        </thead>
    );
};

export default Thead;