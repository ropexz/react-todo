import { useEffect, useState } from 'react';
import './styles.css';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  const [todoList, setTodoList] = useState(() => {
    const storage = localStorage.getItem('todo');
    if (!storage) return [];

    return JSON.parse(storage);
  });

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (name) => {
    setTodoList((todoListState) => {
      return [
        ...todoListState,
        {
          id: crypto.randomUUID(),
          name,
          completed: false,
        },
      ];
    });
  };

  const completedHandler = (id, completed) => {
    setTodoList((todoListState) => {
      return todoListState.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }
        return item;
      });
    });
  };

  const deleteHandler = (id) => {
    setTodoList((todoListState) => {
      return todoListState.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <Form addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <List
        list={todoList}
        completedHandler={completedHandler}
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default App;
