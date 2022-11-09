import { useEffect, useState } from 'react';
import style from './PlayGround.module.css';
import MainMenu from './MainMenu';
import PlayCard from './PlayCard';
import OnStartTimer from './OnStartTimer';
import Cards from '../utils/Cards';

function PlayGround({ words }) {
  const [cards, setCards] = useState(new Cards(0, 0, 'easy'));

  const [score, setScore] = useState(0);

  function startGameHandler(difficalty) {
    let difficaltyTable = {
      easy: 4,
      medium: 6,
      hard: 9,
    };

    setStartTimeLeft(difficaltyTable[difficalty]);
    setCards(new Cards(0, 0, difficalty));
  }

  function hideCradsHandler() {
    setCards((prevCards) => {
      return prevCards.hideCrads();
    });
  }

  function showCard(index) {
    if (cards.showedCardsCounter < 2) {
      setCards((prevCards) => {
        return prevCards.showCard(index);
      });
    }
  }

  useEffect(() => {
    if (cards.showedCardsCounter > 1) {
      const openedCards = cards.cardsArr.filter((card) => {
        return card.isVisable && !card.isComplited ? 1 : 0;
      });
      if (openedCards[0].playValue === openedCards[1].playValue) {
        const tempCards = cards.cardsArr.map((card) => {
          if (
            card.index === openedCards[0].index ||
            card.index === openedCards[1].index
          ) {
            card.isComplited = true;
          }
          return card;
        });
        setCards(new Cards(tempCards, 0, cards.difficalty));

        setScore((s) => s + 5);
      } else {
        setTimeout(() => {
          hideCradsHandler();
        }, 1000);
      }
    }
  }, [cards.showedCardsCounter]);

  const [startTimeLeft, setStartTimeLeft] = useState(3);

  useEffect(() => {
    if (startTimeLeft) {
      let timerID = setTimeout(() => {
        setStartTimeLeft(startTimeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerID);
    } else {
      hideCradsHandler();
    }
  }, [startTimeLeft]);

  return (
    <>
      <MainMenu startGame={startGameHandler} />
      <div className={style[cards.difficalty]}>
        {cards.cardsArr.map((card) => {
          return (
            <PlayCard
              difficalty={cards.difficalty}
              index={card.index}
              word={words[card.playValue]}
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
