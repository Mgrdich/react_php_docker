import {ChangeEventHandler, MutableRefObject, useCallback, useRef, useState} from "react";

export default function useFile(defaultFileName: string = 'Choose a File',  errorMessage: string, filetype: string = 'text/csv'): [
    ChangeEventHandler, string, File | null, string, Function , MutableRefObject<HTMLInputElement | undefined>
] {
    const [fileName, setFileName] = useState(defaultFileName);
    const [file, setFile] = useState<File | null>(null); // Check my type
    const [error, setError] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>();

    const handleBookFileChange = useCallback(async (e) => {
        if (filetype.includes(e.target.files[0]?.type)) {
            setError('');
            if (e.target.files[0].name.length > 12) {
                await setFileName(() => `${e.target?.files[0].name.substring(0, 9).trim()}${e.target.files[0].name.match(/\.[0-9a-z]+$/i)}`);
            } else {
                await setFileName(() => e.target.files[0].name);
            }
            setFile(() => e.target.files[0]);

        } else {
            setError(prev => (errorMessage));
        }

    }, [errorMessage, filetype]);

    const reset = (defaultFileName: string) => {
        setFileName(defaultFileName);
        setFile(null);
        if(inputRef.current) {
            inputRef.current.value = '';
        }
    };

    return [handleBookFileChange, fileName, file, error, reset , inputRef];
}