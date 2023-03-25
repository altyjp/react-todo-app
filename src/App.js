import './App.css';
import HelloClassComponent from './components/ClassComponent';
import HelloFunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <>
      <HelloClassComponent name="🐈" />
      <HelloFunctionalComponent name="猫" />
    </>
  );
}

export default App;
