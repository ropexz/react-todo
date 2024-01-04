import { useState } from 'react';

const Form = ({ addTodo }) => {
  const [todoItem, setTodoItem] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (todoItem === '') return;

    addTodo(todoItem);

    setTodoItem('');
  };

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <div className="form-row">
        <label htmlFor="todo">Add your chore</label>
        <input
          type="text"
          id="todo"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default Form;
