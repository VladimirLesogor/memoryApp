import { useEffect, useState } from 'react';
import randomNumber from '../utils/randomNumber';
import shuffleArrey from '../utils/shuffleArrey';
import style from './PlayGround.module.css';
import PlayCard from './PlayCard';
import OnStartTimer from './OnStartTimer';

function PlayGround() {
  class card {
    constructor(playValue) {
      this.playValue = playValue;
      this.isComplited = false;
      this.isVisable = true;
    }
  }

  let startArr = [];
  if (!startArr.length) {
    while (startArr.length < 12) {
      let randNum = randomNumber(100);
      startArr.push(new card(randNum));
      startArr.push(new card(randNum));
    }
      startArr = shuffleArrey(startArr);
      
  }
  const [cards, setCards] = useState(startArr);

  function hideCradsHandler() {
    let hidedCards = cards.map((card) => {
      card.isVisable = false;
      return card;
    });
    setCards(hidedCards);
  }

  const [startTimeLeft, setStartTimeLeft] = useState(3);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    if (startTimeLeft) {
      setTimeout(() => {
        setStartTimeLeft(startTimeLeft - 1);
      }, 1000);
    } else {
      hideCradsHandler();
      setIsGameStarted(true);
    }
  }, [startTimeLeft]);

  return (
    <div className={style.easyLevel}>
      {cards.map((card, index) => {
        return (
          <PlayCard
            index={index}
            key={index}
            playValue={card.playValue}
            isVisable={card.isVisable}
            isComplited={card.isComplited}
          />
        );
      })}
      <OnStartTimer timeLeft={startTimeLeft} />
    </div>
  );
}

export default PlayGround;
