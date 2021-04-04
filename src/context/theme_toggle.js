import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/theme_reducer'

import {
  CHANGE_THEME,
} from '../actions'

const initialState = {
  isLightThemeActive: true,
}

const ThemeState = React.createContext()

export const ThemeToggler = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeTheme = () => {
    dispatch({ type: CHANGE_THEME })
  }

  return (
    <ThemeState.Provider
      value={{ ...state, changeTheme }}
    >
      {children}
    </ThemeState.Provider>
  )
}
// make sure use
export const useThemeToggle = () => {
  return useContext(ThemeState)
}