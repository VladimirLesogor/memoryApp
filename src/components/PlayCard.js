import style from './PlayCard.module.css';

function PlayCard({ playValue, isVisable, isComplited }) {
  return <div className={style.playCard}>{isVisable && playValue}</div>;
}

export default PlayCard;
