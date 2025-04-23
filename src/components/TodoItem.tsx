import React from 'react';
import {Todo, ActionFunc} from '../types';

interface TodoItemProps extends Todo {
  style?: React.CSSProperties,
  deleteTodo: ActionFunc,
  handleChangeTodo: ActionFunc
}

const TodoItem = ({ id, title, completed, style = {}, deleteTodo, handleChangeTodo }: TodoItemProps) => {
  return (
    <li style={style}>
      <input type="checkbox" checked={completed} onChange={() => handleChangeTodo(id)} />
      <span>{title}</span>
      <span onClick={() => deleteTodo(id)}>&times;</span>
    </li>
  );
}

export default TodoItem;
