import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom"
import App from "./App";
import Store from "./store/store";
import {createBrowserHistory} from 'history'


interface State {
  store: Store;
}

export const store = new Store();

export const Context = createContext<State>({
  store,
});

const history = createBrowserHistory()

ReactDOM.render(
  <Context.Provider
    value={{
      store,
    }}
  >
    <Router history={history}>
       <App/>
     </Router>
  </Context.Provider>,
  document.getElementById("root")
);
