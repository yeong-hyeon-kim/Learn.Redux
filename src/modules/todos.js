// 액션 타입 선언
const ADD_TODO = "todos/ADD_TODO"
const TOGGLE_TODO = "todos/TOGGLE_TODO"

// 액션 함수 선언
let nextId = 1;

export const addtodo = text =>(
    {
        type: ADD_TODO,
        todo:{
            id: nextId++,
            text
        }
    }
)