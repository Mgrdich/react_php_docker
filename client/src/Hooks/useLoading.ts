import {useCallback, useState} from "react";

export default function useLoading(defErrorMessage: string = 'something went wrong'): {
    isLoading: boolean,
    setLoading: Function,
    isError: boolean,
    setError: Function,
    errorMessage: string,
    unsetError: Function
} {
    const [isLoading, setterLoading] = useState<boolean>(false);
    const [isError, setterError] = useState<boolean>(false);
    const [errorMessage, setterErrorMessage] = useState<string>(defErrorMessage);

    const setError = useCallback(function (msg: string) {
        setterError(true);
        setterErrorMessage(msg);
        setterLoading(false);
    }, []);

    const unsetError = useCallback(function () {
        setterError(false);
    }, []);

    const setLoading = useCallback(function (value: boolean) {
        setterError(false);
        setterLoading(value);
    }, []);

    return {
        isLoading,
        setLoading,
        isError,
        unsetError,
        errorMessage,
        setError
    };
}