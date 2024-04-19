import { useState } from "react";
import "./App.css";

function Hello(props) {

  const [moodPoints, setMood] = useState(1);

  const onClickHappy = () => {
    return moodPoints < 10 ? setMood(moodPoints + 1) : setMood(0);
  };

  const onClickSad = () => {
    return moodPoints > 0 ? setMood(moodPoints - 1) : setMood(10);
  };

  return (
    <div>
      <h1>Waaazzaaap!! {props.name}</h1>
      <h2>Age = {props.age}</h2>
      <h3>It is time for some tea!</h3>

      <h4>Vehicle = {props.car.name}</h4>

      <h4>Likes = {props.likes.join(", ")}</h4>

      <p>Happiness Level = {moodPoints}</p>
      <button onClick={onClickHappy}> Happy </button>
      &nbsp;
      <button onClick={onClickSad}> Sad </button>

    </div>
  );
}

export default Hello;
