import {FC} from "react";

interface ITbody {
    data: Array<any>;
}

const Tbody: FC<ITbody> = ({data}) => {
    return (
        <tbody>
        {
            data.map(item => {
                    let tdData: string[] = Object.keys(item);
                    return (
                        <tr key={item.id}>
                            {
                                tdData.map(td => (
                                    <td key={td}>{item[td]}</td>
                                ))
                            }
                        </tr>
                    )
                }
            )
        }
        </tbody>
    );
};

export default Tbody;