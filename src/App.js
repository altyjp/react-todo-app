import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {

  const dummyList = [
    {
      id : 0,
      name : 'cat'
    },
    {
      id : 1,
      name : 'cat1'
    },
  ];

  return (
    <>
     <h1>TODO App</h1>
      <TodoInput/>
      <TodoList tasks={dummyList}/>
    </>
  );
}

export default App;
