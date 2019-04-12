import React, { useMemo, useReducer } from 'react';
import Counter from './Counter';
import CountContext from '../Contexts/CountContext';
import { CountReducer } from '../Reducers/CountReducer';

const App = () => {

  // Set up our initial state, can be anything.
  const initialState = { count: 0 };
  // Call define state object and dispatch function and set our initial state and call our reducer
  const [ state, dispatch ] = useReducer( CountReducer, initialState );

  // Prevents calling of this function on every render, instead it'll only recompute the memoized value when one of the inputs has changed
  const context = ( useMemo( () => [ state, dispatch ], [ state ] ) );

  // Still need to nest components in the Provider, There is a bit of a workaround for this
  return (
    <CountContext.Provider value={ context } >
      <Counter />
    </CountContext.Provider>
  );
}

export default App;
