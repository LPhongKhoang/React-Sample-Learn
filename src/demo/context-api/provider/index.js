import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../store';


export const AppOneContext = createContext();



function ContextProvider({children}) {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  
  
  return <AppOneContext.Provider value={{state, dispatch}}>
    {children}
  </AppOneContext.Provider>
}

export default ContextProvider;