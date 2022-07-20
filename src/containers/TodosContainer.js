import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
  // useSelector에서 객체를 반환 할 필요 없이 원하는 값만 반환해도 상관 없다.
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // useDispatch는 리덕스 스토의 dispatch를 함수에서 사용 할 수 있게 해주는 Hook.
  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id), [dispatch]));

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
