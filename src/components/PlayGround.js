import { useEffect, useState } from 'react';
import randomNumber from '../utils/randomNumber';
import shuffleArrey from '../utils/shuffleArrey';
import style from './PlayGround.module.css';
import PlayCard from './PlayCard';

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
    
 

  return (
    <div className={style.easyLevel}>
      {cards.map((card, index) => {
        return (
          <PlayCard index={index} key={index} playValue={card.isVisable && card.playValue} />
        );
      })}
    </div>
  );
}

export default PlayGround;
