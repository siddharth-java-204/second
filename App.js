import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cart />
        <hr></hr>
        <Students/>
      </Provider>
    </div>
  );
}

export default App;
