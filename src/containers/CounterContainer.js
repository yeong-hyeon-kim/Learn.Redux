// 컨테이너 컴포넌트
// 리덕스 스토어 상태를 조회하거나, 액션을 디스패치(발생시키는 것)할 수 있는 컴포넌트를 의미.
// 다른 프로젠테이셔널 컴포넌트들을 불러와서 사용.

import React from "react";
import { useSelector, useDispatch } from "react-redux";
// 다른 프로젠테이셔널 컴포넌트들을 불러와서 사용.
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  // useSelector 리덕스 스토어의 상태를 조회하는 Hook.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나느 결과물과 동일.
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  // useDispatch는 리덕스 스토의 dispatch를 함수에서 사용 할 수 있게 해주는 Hook.
  const dispatch = useDispatch();

  // 각 함수를 Dispatch하는 함수를 만든다.
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    ></Counter>
  );
}
export default CounterContainer;
