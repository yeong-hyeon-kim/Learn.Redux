// 스토어를 만들어주는 함수.
// 단 하나의 스토어.
import { createStore } from "redux";

// 리덕스에서 관리할 상태(State) 정의
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// 액션(Action) 타입 정의
// 액션 타입은 주로 대문자로 작성.
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE TEXT";
const ADD_TO_LIST = "ADD TO LIST";

// 액션 생성 함수(Action Creator) 정의.

// 액션을 만드는 함수
// 파라미터를 받아와서 액션 객체 타입으로 만듬.
// 컴포넌트에서 더욱 쉽게 액션을 발생시키기 위함.
// 액션 생성 함수는 주로 카멜 케이스로 작성.
const increase = () => {
  // 액션 객체에는 type 값이 필수!
  return {
    type: INCREASE,
  };
};

const decrease = () => {
  return {
    type: DECREASE,
  };
};

const changeText = (text) => {
  return {
    type: CHANGE_TEXT,
    // type 이외 추가적인 필드를 넣을 수 있다.
    text,
  };
};

const addToList = (item) => {
  return {
    type: ADD_TO_LIST,
    item,
  };
};

// 리듀서(Reducer)
// 변화를 일으키는 함수, 두가지 파라미터를 받음.
// 1. 현재의 상태
// 2. 전달 받은 액션
const reducer = (state = initialState, action) => {
  // state의 초기값 initialState
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    case CHANGE_TEXT:
      return { ...state, text: action.text };
    case ADD_TO_LIST:
      return { ...state, list: state.state.list.concat(action.item) };
    default:
      return { state };
  }
};

// 스토어(Store)
// 애플리케이션에 한 개만 포함하는 것을 권장.
// 현재 앱 상태, 내장 함수, 리듀서 포함
const store = createStore(reducer);

// 현재 Store 안에 들어있는 상태를 조회.
console.log(store.getState());

// 스토어안에 들어 있는 상태가 바뀔 때 마다 호출되는 리스너(Listener)함수.
const listener = () => {
  const state = store.getState();
  console.log(state);
};

// 스토어(Store) 내장 함수 - subscribe
// 스토어 내장함수. 함수 형태의 값을 파라미터로 받는다.
// 특정 함수를 전달하면 액션이 디스패치(발생)되었을때 전달해준 함수가 호출.
// Connect, useSelector Hook 사용하여 리덕스 스토어 상태 구독.
const unsubscribe = store.subscribe(listener);

// 스토어(Store) 내장 함수 - dispatch
// 스토어 내장함수. 액션을 발생 시키는 것
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList([{ id: 1, text: "안녕하세요" }]));
