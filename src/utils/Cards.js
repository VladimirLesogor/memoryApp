import Card from './Card';
import shuffleArrey from './shuffleArrey';
import randomNumber from './randomNumber';

class Cards {
  constructor(incomeArr, showedCardsCounter, difficalty) {
    this.cardsArr = incomeArr || this.createStartArr(difficalty);
    this.showedCardsCounter = showedCardsCounter || 0;
    this.difficalty = difficalty || 'easy';
  }

  createStartArr(difficalty) {
    let startArr = [];
    let difficaltyTable = {
      easy: 12,
      medium: 16,
      hard: 20,
    };
    if (!startArr.length) {
      let index = 0;
      while (startArr.length < difficaltyTable[difficalty]) {
        let randNum = randomNumber(100);

        startArr.push(new Card(randNum, index));
        index++;
        startArr.push(new Card(randNum, index));
        index++;
      }

      startArr = shuffleArrey(startArr);
    }
    return startArr;
  }

  hideCrads() {
    let cardsArr = this.cardsArr.map((card) => {
      if (!card.isComplited) card.isVisable = false;
      return card;
    });
    return new Cards(cardsArr, 0, this.difficalty);
  }

  showCard(index) {
    let cardsArr = this.cardsArr.map((card) => {
      if (card.index === index) card.isVisable = true;
      return card;
    });

    let showedCardsCounter = this.showedCardsCounter + 1;

    return new Cards(cardsArr, showedCardsCounter, this.difficalty);
  }
}

export default Cards;
