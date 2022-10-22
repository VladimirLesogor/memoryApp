import style from './PlayCard.module.css'

function PlayCard({playValue}) {
    return <div className={style.playCard}>
      {playValue}
  </div>;
}

export default PlayCard;
