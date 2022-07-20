import React, { useState } from "react";

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle}></TodoItem>
      ))}
    </ul>
  );
});

function Todos({ todos, onCreate, onToggle }) {
  // 리덕스를 사용한다고 모든 상태를 리덕스를 관리할 필요는 없다.
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    // Submit 이벤트 발생했을 때 새로고침 방지
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요."
          onChange={onChange}
        ></input>
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle}></TodoList>
    </div>
  );
}

export default Todos;
