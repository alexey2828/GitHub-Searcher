import { ReactNode } from "react";
import ReposCard from "../../components/cards/repos-card";
import UserCard from "../../components/cards/user-card";

interface IListProps {
    data: any;
    type: string;
}

export const CurrentCard = ({data, type}: IListProps): ReactNode => {
    switch(type) {
        case 'User':
            return (<UserCard user={data}/>);
        case 'Repos':
            return (<ReposCard repos={data}/>);
    }
}