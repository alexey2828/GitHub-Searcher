import { FC } from 'react';
import style from "./loader.module.scss"

const Loader: FC = () => {
  return (
    <div className={style.mainContainer}>
      <img 
        className={style.loaderImage} 
        src={'https://cdn.discordapp.com/attachments/466314747281801228/1014808785820327956/loading-12.gif'}
        alt='loader'
      />
    </div>
  );
}

export default Loader;