import shuffleArrey from './shuffleArrey';
import randomNumber from './randomNumber';
import Card from './Card';

function createStartArr() {
  let startArr = [];
  if (!startArr.length) {
    let index = 0;
    while (startArr.length < 12) {
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
export default createStartArr;
