import {useCallback, useEffect, useState} from "react";
import $http from "../http";
import useLoading from "./useLoading";

export type PaginationLinks = {
    first: string | null,
    last: string | null,
    prev: string | null,
    next: string | null
};

export type paginationLinkTypes = keyof PaginationLinks;

type useTableReturn = {
    isLoading: boolean;
    isError: boolean;
    tbody: any[];
    thead: string[];
    setPagination: (s: paginationLinkTypes) => void;
};

export default function useTable(fetchUrl: string): useTableReturn {
    const [url, setUrl] = useState<string>(fetchUrl);
    const {isLoading, isError, setError, setLoading} = useLoading();
    const [tbody, setTbody] = useState([]);
    const [thead, setThead] = useState<string[]>([]);
    const [paginationLinks, setPaginationLinks] = useState<PaginationLinks>({
        first: null,
        last: null,
        prev: null,
        next: null
    });

    useEffect(function () {
        setLoading(true);
        $http.get(url).then(function (res) {
            let data = res.data.data;
            let links: PaginationLinks = res.data.links;
            setLoading(false);
            if (data.length) {
                setThead(Object.keys(data[0]));
                setTbody(data);
            }
            if (links) {
                setPaginationLinks(links);
            }
        }).catch(function (err) {
            setError(err);
        });
    }, [setLoading, setError, url]);


    const setPagination = useCallback(function (paginationKey: paginationLinkTypes) {
        console.log('sss');
        if (paginationLinks[paginationKey]) {
            setUrl(paginationLinks[paginationKey] as string);
        }
    }, [paginationLinks]);

    return {isLoading, isError, tbody, thead, setPagination};
}