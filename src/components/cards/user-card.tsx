import { useNavigate } from "react-router-dom";
import { IUser } from "../../types/user";
import style from "./common-card.module.scss"

interface UserCardProps {
	user: IUser;

}

const UserCard: React.FC<UserCardProps> = ({user}) => {
    const navigate = useNavigate();

    return (
        <div className={style.mainContainer}>
            <div className={style.flexContainer}>
                <div className={style.item}>
                    <img 
                        className={style.avatar} 
                        src={user.avatar_url}
                        alt={`${user.login} avatar`}
                    />
                </div>
                <div className={style.item} onClick={() => navigate('/profile/' + user.login)}>{user.login}</div>
                <div className={style.item}> Repos: {user.public_repos ? user.public_repos : '##'}</div>
            </div>
        </div>
    );
}

export default UserCard;

