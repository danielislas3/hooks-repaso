import React from 'react';

export const TodoListItem = ({ todo, handleToggle, handleDelete,index }) => {
  return (
    <li key={todo.id} className='list-group-item list-group-flush'>
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => handleToggle(todo.id)}>
        {' '}
        {index + 1}.- {todo.desc}
      </p>
      <button
        onClick={() => {
          handleDelete(todo.id);
        }}
        className='btn btn-danger'>
        Borrar
      </button>
    </li>
  );
};
