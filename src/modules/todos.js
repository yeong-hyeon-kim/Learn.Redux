// 액션 타입 선언
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// 액션 함수 선언
let nextId = 1;
export const addtodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// 초기 상태 선언

const InitialState = [
  {
    id: 1,
    text: "테스트",
    done: false,
  },
];

// Reducer 리듀서
export default function todos(state = InitialState, action) {
  // 액션 타입 확인.
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
