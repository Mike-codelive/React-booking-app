import React, { useContext, useReducer, useEffect } from 'react'
import reducer from '../reducers/theme_reducer'
import {
  CHANGE_THEME,
} from '../actions'

const getStorage = () => {
  let currentThemeState = JSON.parse(localStorage.getItem('theme'));

  if (currentThemeState === null) {
    return currentThemeState = true;
  }
  return currentThemeState;
}

const initialState = {
  isLightThemeActive: getStorage(),
}

const ThemeState = React.createContext()

export const ThemeToggler = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeTheme = () => {
    dispatch({ type: CHANGE_THEME })
  }

  useEffect(() => {
    localStorage.setItem('theme', state.isLightThemeActive)
  }, [state.isLightThemeActive])

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