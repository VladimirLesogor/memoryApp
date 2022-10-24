import { useEffect, useState } from 'react';
import randomNumber from '../utils/randomNumber';
import shuffleArrey from '../utils/shuffleArrey';
import style from './PlayGround.module.css';
import PlayCard from './PlayCard';
import OnStartTimer from './OnStartTimer';

function PlayGround() {
  class card {
    constructor(playValue, index) {
      this.index = index;
      this.playValue = playValue;
      this.isComplited = false;
      this.isVisable = true;
    }
  }

  let startArr = [];
  if (!startArr.length) {
    let index = 0;
    while (startArr.length < 12) {
      let randNum = randomNumber(100);

      startArr.push(new card(randNum, index));
      index++;
      startArr.push(new card(randNum, index));
      index++;
    }
    startArr = shuffleArrey(startArr);
  }
  const [cards, setCards] = useState(startArr);
  const [showedCounter, setShowedCounter] = useState(0);
  const [score, setScore] = useState(0);

  function hideCradsHandler() {
    let hidedCards = cards.map((card) => {
      if (!card.isComplited) card.isVisable = false;
      return card;
    });
    setCards(hidedCards);
  }

  function showCard(index) {
    if (showedCounter < 2) {
      setCards(
        cards.map((card) => {
          if (card.index === index) card.isVisable = true;
          return card;
        })
      );
      setShowedCounter(showedCounter + 1);
    }
  }

  useEffect(() => {
    if (showedCounter > 1) {
      const openedCards = cards.filter((card) => {
        return card.isVisable && !card.isComplited ? 1 : 0;
      });
      if (openedCards[0].playValue === openedCards[1].playValue) {
        const tempCards = cards.map((card) => {
          if (
            card.index === openedCards[0].index ||
            card.index === openedCards[1].index
          ) {
            card.isComplited = true;
          }
          return card;
        });
        setCards(tempCards);
        setShowedCounter(0);
        setScore(score + 5);
      } else {
        setTimeout(() => {
          hideCradsHandler();
          setShowedCounter(0);
        }, 1000);
      }
    }
  }, [showedCounter]);

  const [startTimeLeft, setStartTimeLeft] = useState(3);

  useEffect(() => {
    if (startTimeLeft) {
      setTimeout(() => {
        setStartTimeLeft(startTimeLeft - 1);
      }, 1000);
    } else {
      hideCradsHandler();
    }
  }, [startTimeLeft]);

  return (
    <>
      <div className={style.easyLevel}>
        {cards.map((card) => {
          return (
            <PlayCard
              index={card.index}
              key={card.index}
              playValue={card.playValue}
              isVisable={card.isVisable}
              isComplited={card.isComplited}
              showCard={showCard}
            />
          );
        })}
        <OnStartTimer timeLeft={startTimeLeft} />
      </div>
      <div className={style.score}>Score: {score}</div>
    </>
  );
}

export default PlayGround;
