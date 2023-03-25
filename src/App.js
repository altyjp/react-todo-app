import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {

  const initialState = 
  {
    nextId : 2,
    todoList : [
        {
          id : 0,
          name : 'cat'
        },
        {
          id : 1,
          name : 'cat1'
        },
    ]
  };

  // 第二引数 が state変更関数となる
  const [todoState, setTodoList] = useState(initialState);

  const addTodo = (newTaskName) => {
    const {
      nextId,
      todoList
    } = todoState;

    todoList.push(
      {
        id: nextId,
        name: newTaskName
      }
    );
    setTodoList (
      {
        nextId : nextId + 1,
        todoList
      }
    );
  };

  const resetTodo = () => {
    setTodoList (
      {
        nextId : 0,
        todoList : []
      }
    )
  }

  return (
    <>
     <h1>TODO App</h1>
      <p><button onClick={resetTodo}>reset</button></p>
      <TodoInput addTodo={addTodo}/>
      <TodoList tasks={todoState.todoList}/>
    </>
  );
}

export default App;
