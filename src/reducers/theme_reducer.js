import {
  CHANGE_THEME,
} from '../actions'

const theme_reducer = (state, action) => {

  if (state.isLightThemeActive && action.type === CHANGE_THEME) {
    return { ...state, isLightThemeActive: false }
  } else {
    return { ...state, isLightThemeActive: true }
  }

}

export default theme_reducer