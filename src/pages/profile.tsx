/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorForm from "../components/error-forms/error-form";
import Loader from "../components/error-forms/loader/loader";
import SearchInput from "../components/search-input/search-input";
import { EEntityType } from "../const/entity-type";
import { EUrl, EUrlParams } from "../const/urls";
import { useHttpGet } from "../infrastructure/hooks/use-http-get";
import { IUser } from "../types/user";
import style from "./styles/profile-page.module.scss"

const UserPage: React.FC = () => {
    const user = useParams();
    const { data, error, isLoading, updateResponse } = useHttpGet<IUser>();

    useEffect(() => {        
        setTimeout(() => {     
            updateResponse(EUrl.CommonUrl + EUrlParams.Users + '/' + user.id);
        }, 300);
    }, []);

    return (
        <div className={style.mainContainer}>
            {isLoading ? (
                <Loader />
                ): error ? (<ErrorForm message={error.message}/>) 
                : data &&
                    <div> 
                        <div className={style.contentContainer}>
                            <div className={style.flexContainer}>
                                <div className={style.item}>
                                    <img 
                                        className={style.avatar} 
                                        src={data.avatar_url}
                                        alt={`${data.name} avatar`}
                                    />
                                </div>
                                <div className={style.item}>
                                    {data.name}<br/>
                                    {data.login}<br/>
                                    { data.location && <>Location: {data.location}<br/></>}
                                    Join Date: {data.created_at}<br/>
                                    Followers: {data.followers}<br/>
                                    Following: {data.following}<br/>
                                </div>
                            </div>
                            Repos: 
                            <SearchInput url={EUrl.CommonUrl} params={{firstParam: EUrlParams.Repos, secondParam: data.login}} type={EEntityType.Repos}/>
                        </div>
                    </div>
            }
        </div>
    );
}

export default UserPage;

