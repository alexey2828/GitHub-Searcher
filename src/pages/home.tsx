import SearchInput from "../components/search-input/search-input";
import { EEntityType } from "../const/entity-type";
import { EUrl } from "../const/urls";
import style from "./styles/home-page.module.scss"

const HomePage: React.FC = () => {
    
    return (
        <div className={style.mainContainer}>
            <div className={style.contentContainer}>
                <h2>GitHub Searcher</h2>
                <SearchInput url={EUrl.CommonUrl} type={EEntityType.User}/>
            </div>
        </div>
    );
}

export default HomePage;

