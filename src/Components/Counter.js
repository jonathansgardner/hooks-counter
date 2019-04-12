import React, { useContext } from 'react';
import CountContext from '../Contexts/CountContext';

const Counter = () => {
  // import the state object and dispatch function set up in CountContext
  const [ state, dispatch ] = useContext( CountContext );

  return (
    <div>
      {/* Gets the count from our state object in CountContext */}
      <p>{ state.count }</p>
      <div className="controls">
        {/* Clicking this button dispatches an ADD action to our CountReducer */}
        <button onClick={ () => dispatch({ type: 'ADD' }) }>+</button>
        {/* Clicking this button dispatches a SUBTRACT action to the CountReducer */}
        <button onClick={ () => dispatch({ type: 'SUBTRACT' }) }>-</button>
      </div>
    </div>
  );
}

export default Counter;
