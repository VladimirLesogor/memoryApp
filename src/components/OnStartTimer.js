
import style from './OnStartTimer.module.css'

function OnStartTimer({timeLeft  }) {
  

  return <div className={style.timer}>{!!timeLeft&&timeLeft}</div>;
}

export default OnStartTimer;
