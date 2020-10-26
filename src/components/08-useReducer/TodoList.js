import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul>
      {todos.length>0?todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={i}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      )):<span></span>}
    </ul>
  );
};
