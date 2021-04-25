import React, { useContext, useReducer, useEffect } from 'react'

import {
  CHANGE_THEME,
} from '../actions'

const theme_reducer = (state, action) => {


  if (state.isLightThemeActive && action.type === CHANGE_THEME) {
    localStorage.setItem('theme', false);
    return { ...state, isLightThemeActive: false }
  } else {
    localStorage.setItem('theme', true);
    return { ...state, isLightThemeActive: true }
  }

  // throw new Error(`No Matching "${action.type}" - action type`)
}

export default theme_reducer