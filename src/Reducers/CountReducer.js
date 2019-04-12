// Checks the type of the action that was dispatched and processes it accordingly
export const CountReducer = ( state, action ) => {
  switch ( action.type ) {
    case 'ADD':
      return { ...state, count: ++state.count };
    case 'SUBTRACT':
      return { ...state, count: --state.count }
    default:
      return state;
  }
}
