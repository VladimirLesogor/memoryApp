import { useState } from 'react';

function MainMenu() {
  const [difficalty, setDifficalty] = useState('easy');
  const newGameHandler = (event) => {
      event.preventDefault();

  };
  const changeDifficaltyHandler = (event) => {
    setDifficalty(event.target.value);
  };

  return (
    <form>
      <h1>Memory Game</h1>
      <input
        type="radio"
        name="difficulty"
        value="easy"
        id="easyRadio"
        checked={difficalty === 'easy' ? true : false}
        onChange={(event) => changeDifficaltyHandler(event)}
      />
      <label htmlFor="easyRadio">Easy</label>
      <input
        type="radio"
        name="difficulty"
        value="medium"
        id="mediumRadio"
        checked={difficalty === 'medium' ? true : false}
        onChange={(event) => changeDifficaltyHandler(event)}
      />
      <label htmlFor="mediumRadio">Medium</label>
      <input
        type="radio"
        name="difficulty"
        value="hard"
        id="hardRadio"
        checked={difficalty === 'hard' ? true : false}
        onChange={(event) => changeDifficaltyHandler(event)}
      />
      <label htmlFor="hardRadio">Hard</label>
      <br />
      <button type="submit" onClick={(event) => newGameHandler(event)}>
        New game
      </button>
    </form>
  );
}

export default MainMenu;
