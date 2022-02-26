import {useEffect, useState} from "react";
import $http from "../http";
import useLoading from "./useLoading";

export default function useTable(url: string) {
    const {isLoading, isError, setError, setLoading} = useLoading();
    const [tbody, setTbody] = useState([]);
    const [thead, setThead] = useState<string[]>([]);

    useEffect(function () {
        setLoading(true);
        $http.get(url).then(function (res) {
                let data = res.data.data;
                setLoading(false);
                if (data.length) {
                    setThead(Object.keys(data[0]));
                    setTbody(data);
                }
            }).catch(function (err) {
            setError(err);
        });
    }, [url]);


    return {isLoading, isError, tbody, thead};
}