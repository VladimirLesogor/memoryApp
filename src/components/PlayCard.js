import style from './PlayCard.module.css';

function PlayCard({difficalty, playValue, isVisable, isComplited, showCard, index , word}) {
  function cardClickHandler() {
    if (!isComplited && !isVisable) {
      showCard(index);
    }
    }
    let styleName = isComplited ? 'playCardComplited_' :'playCard_'  ;
    styleName += difficalty;

    let content;
    if (difficalty === 'easy') content = playValue;
    if (difficalty === 'medium') content = word;

    let imgURL = `https://picsum.photos/100/100?random=${playValue}`
    if (difficalty === 'hard') content = <img src={imgURL} />

  return (
    <div
      onClick={cardClickHandler}
      className={style[styleName]}
    >
      {isVisable && content}
    </div>
  );
}

export default PlayCard;
