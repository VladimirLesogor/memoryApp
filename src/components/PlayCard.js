import style from './PlayCard.module.css';

function PlayCard({ playValue, isVisable, isComplited, showCard, index }) {
  function cardClickHandler() {
    if (!isComplited && !isVisable) {
      showCard(index);
    }
  }

  return (
    <div
      onClick={cardClickHandler}
      className={isComplited ? style.copmlitedCard : style.playCard}
    >
      {isVisable && playValue}
    </div>
  );
}

export default PlayCard;
