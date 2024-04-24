import './App.css';
import Todo from './pages/Todo';
import { Provider } from "react-redux";
import { store } from "./Api/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todo/>
      </Provider>
    </div>
  );
}

export default App;
