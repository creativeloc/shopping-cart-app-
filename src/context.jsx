import { useContext, useReducer, useEffect, createContext } from "react"
import reducer from "./reducer"

import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS
} from "./actions"

const AppContext = createContext()

/*
  reducer: 1st.parameter
    const reducer = (state, action) => {
    return state
  }
  // put this in a separate file (reducer.js) and import it into this file
*/

// initialState: 2nd. parameter
const initialState = {
  loading: false,
  cart: []
}

export const AppProvider = ({ children }) => {
  // NOTE: 'useReducer hook' accepts two parameters ('reducer' and the 'initialState')
  // Just like in 'useState', the useReducer hook is also
  //  Destructured to produce 'state' and 'action' items
  const [state, dispatch] = useReducer((reducer, initialState))

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
//
