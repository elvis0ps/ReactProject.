
import './App.css';
import TodoList from './component/To-do List';
// import FetchApi from './component/Activities';
import Activities from './component/FetchApi';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
      <TodoList />
      <Activities />
      <Form />
    </div>
  );
}

export default App;
