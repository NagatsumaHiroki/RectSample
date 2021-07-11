import React, { useEffect, useState } from "react";
import Colorfull from "./components/Colorfull";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };
  const contetLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setfaceShowFlag(true);
    } else {
      faceShowFlag && setfaceShowFlag(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <Colorfull color="blue" message="お元気ですか" />
      <p style={contetLedyStyle}>元気です</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>!(^^)!</p>}
    </React.Fragment>
  );
};

export default App;
