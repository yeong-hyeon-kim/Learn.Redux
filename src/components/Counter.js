// 프리젠테이셔널 컴포넌트 UI 선언 집중.
// 필요한 값이나 함수는 Props로 받아와 사용하는 형태.
import React from "react";

// Counter(Props:{ number, diff, onIncrease, onDecrease, onSetDiff } )
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    //e.target.value의 타입은 문자열
    onSetDiff(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange || ""} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
