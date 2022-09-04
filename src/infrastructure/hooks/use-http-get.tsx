/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";


interface IUseHttpGet<T> {
    data?: T | null;
    error?: Error | null;
    isLoading: boolean;
    updateResponse: (url: string) => void;
    resetError: () => void;
}

export function useHttpGet<T>(): IUseHttpGet<T> {
    const [data, setData] = useState<IUseHttpGet<T>['data']>(null);
    const [error, setError] = useState<IUseHttpGet<T>['error']>(null);
    const [isLoading, setIsLoading] = useState<IUseHttpGet<T>['isLoading']>(false);
    const [url, setUrl] = useState('');

    const resetError: IUseHttpGet<T>['resetError'] = () => {
      setError(null);
    };

    const updateResponse: IUseHttpGet<T>['updateResponse'] = (url: string) => {
      setUrl(url);
    }

    useEffect(() => {
        fetch();
    }, [url]);
    console.log(url)

    async function fetch() {
        setIsLoading(true);
        resetError();
        try {
          const response = await axios.get(url);
          if(response.data){
            setData(response.data);
            resetError();
          }
        setIsLoading(false);
        } catch (e: any) {
            setError(e);
            setIsLoading(false);
        }
      }
    return {data, error, isLoading, updateResponse, resetError};
}
