import $http from "../http";
import {AxiosRequestConfig} from "axios";

export default class FileService {
    // TODO fix this typing
    static upload(file: any, obj: {
        fileName: string,
        url: string,
        onUploadProgress?: (progressEvent: any) => void
    }): Promise<any> {
        let formData = new FormData();
        formData.append(obj.fileName, file);

        let config: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        };

        if (obj.onUploadProgress) {
            config.onUploadProgress = obj.onUploadProgress;
        }

        return $http.post(obj.fileName, formData, config);
    }
}