import { useEffect, useState } from 'react';
import './App.css';
import PlayGround from './components/PlayGround';
import CacheIMG from './components/CacheIMG';

function App() {
  let URL_WORDS =
    'https://random-word-api.herokuapp.com/word?number=100&length=4';
  const [isLoading, setIsLoading] = useState(true);
  const [wordsArr, setWordsArr] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(URL_WORDS);
        const words = await response.json();
        setWordsArr(words);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading && <div>Loading</div>}
      {!isLoading && <PlayGround words={wordsArr} />}
      <CacheIMG />
    </div>
  );
}

export default App;
