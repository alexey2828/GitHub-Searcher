import { IRepos } from "../../types/repos";
import style from "./common-card.module.scss"

interface UserCardProps {
	repos: IRepos;

}

const ReposCard: React.FC<UserCardProps> = ({repos}) => {

    return (
        <div className={style.mainContainer}>
            <div className={style.flexContainer}>
                <div className={style.item}>
                    Name: <a href={repos.svn_url}>{repos.name}</a>
                </div>
                    <div className={style.rightBox}>
                        <div>{repos.forks} Forks</div>
                        <div>{repos.stargazers_count} Starts</div>
                    </div>
            </div>
        </div>
    );
}

export default ReposCard;

