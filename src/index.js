import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerForBrowser } from "redux-little-router";
import 'semantic-ui-css/semantic.min.css'
import reducers from "./redux/reducers";
import ConnectedApp from "./connect";

const routes = {
  "/friends": {
    title: "Friends"
  },
  '/friends/:id': {
    title: 'Friend Something'
  },
  "/occasions": {
    title: "Occasions"
  },
  "/occasions/:id": {
    title: "Occasion Something"
  },
  "/": {
    title: "Home"
  }
};

const { reducer, middleware, enhancer } = routerForBrowser({
  routes
});

const store = createStore(
  combineReducers({ router: reducer, reducers }),
  {},
  compose(enhancer, applyMiddleware(middleware, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp routes={routes} />
  </Provider>,
  document.getElementById("root")
);
