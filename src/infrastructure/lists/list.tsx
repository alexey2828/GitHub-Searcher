import { ReactNode } from "react";
import { IRepos } from "../../types/repos";
import { IUser } from "../../types/user";
import { CurrentCard } from "../current-card/current-card";

interface IListProps {
    data: IUser[] | IUser | IRepos[] | IRepos;
    type: string;
}

export const List = ({data, type}: IListProps): ReactNode => {

    if(Array.isArray(data)){
        return(
            <>
                { data?.map(user => 
                    <div key={user?.id}>
                        {CurrentCard({data: user, type})}<br/>
                    </div>)
                }
            </>
        )
    } else {
        return(
            <>
                {CurrentCard({data, type})}<br/>
            </>
        )
    }
    
}


