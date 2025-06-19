import { useContext, useReducer, useEffect, createContext } from "react"
import reducer from "./reducer"

const AppContext = createContext()

// NOTE: the 'useReducer hook' accepts two parameters ('reducer' and the 'initialState')

// 1st.parameter: reducer

// 2nd. parameter: initialState
const initialState = {
  loading: false,
  cart: []
}

export const AppProvider = ({ children }) => {
  // Just like in 'useState', the useReducer hook is also
  //  destructured to produce 'state' and 'action' items
  const [state, dispatch] = useReducer((reducer, initialState))

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
