import React from 'react';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { useEffect } from 'react';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, despatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = todoId => {
    const action = {
      type: 'delete',
      payload: todoId,
    };

    despatch(action);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: 'add',
      payload: newTodo,
    };

    despatch(action);

    reset();
  };
  return (
    <div>
      <h1>TodoApp: {todos.length}</h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <ul>
            {todos.map((todo, i) => (
              <li key={todo.id} className='list-group-item list-group-flush'>
                <p className='text-center'>
                  {' '}
                  {i + 1}.- {todo.desc}
                </p>
                <button
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                  className='btn btn-danger'>
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-5'>
          <h4>Agregar Todo</h4>

          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='description'
              className='form-control'
              placeholder='Aprender...'
              autoComplete='off'
              value={description}
              onChange={handleInputChange}
            />
            <button
              className='btn btn-outline-primary mt-1 btn-block'
              type='submit'>
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
