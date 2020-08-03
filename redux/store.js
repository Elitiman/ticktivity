import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./root-reducer";

let store;
function initStore(initialState) {
  return createStore(reducers, initialState, applyMiddleware(thunkMiddleware));
}

/* Server side rendering (SSR) and Static Site Generation (SSG) 
are two ways to create websites using a modern front-end stack 
(getting content from a server API) while preserving SEO friendliness 
and perceived performance. 
*/
export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
