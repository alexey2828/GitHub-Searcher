/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { EEntityType } from "../../const/entity-type";
import { EUrlParams } from "../../const/urls";
import { useHttpGet } from "../../infrastructure/hooks/use-http-get";
import { List } from "../../infrastructure/lists/list";
import { IRepos } from "../../types/repos";
import { IUser } from "../../types/user";
import ErrorForm from "../error-forms/error-form";
import Loader from "../error-forms/loader/loader";
import style from "./search-input.module.scss"

interface ISearchInputProps {
	url: string;
    params?: {
        firstParam?: string;
        secondParam?: string;
    };
    type: string;
}

const SearchInput: FC<ISearchInputProps> = ({url, params, type}: ISearchInputProps) => {
    const { data, error, isLoading, updateResponse } = useHttpGet<IUser[] | IUser | IRepos[] | IRepos>();
    const [name, setName] = useState('');
    const onChangeValue = (value: string): void => {
        setName('/' + value);
    };

    useEffect(() => {        
        setTimeout(() => {
            if (name === '/'){
                setName('');
            }            
            switch(type) {
                case EEntityType.User:
                    return updateResponse(url + EUrlParams.Users + name + (params?.firstParam ? params.firstParam: ''));
                case EEntityType.Repos:
                    return updateResponse(
                        name === ''? url + EUrlParams.Users + '/' + params?.secondParam + EUrlParams.Repos :
                        url + EUrlParams.Repos + '/' + (params?.secondParam ? params.secondParam: '') + name
                    );
            }
            
        }, 300);
    }, [name]);

    return (
        <div>
            <input className={style.input} onChange={(value): void => onChangeValue(value.target.value)}></input>
            <div className={style.listContainer}>
                {isLoading ? (
                    <Loader />
                        ): error ? (<ErrorForm message={error.message}/>) 
                        : data && List({data, type})
                }
            </div>
        </div>
    );
}

export default SearchInput;