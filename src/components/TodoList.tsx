import React from 'react';
import {Todo, ActionFunc} from '../types';
import TodoItem from './TodoItem';

type TodoListProps = {
    todos: Todo[];
    deleteTodo: ActionFunc;
    handleChangeTodo: ActionFunc;
  };

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, handleChangeTodo }) => {
    return (
        <ul>
          {todos.map((todo: Todo) => (
            <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} handleChangeTodo={handleChangeTodo} />
          ))}
        </ul>
      );
}

export default TodoList;