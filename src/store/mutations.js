import Cookies from 'js-cookie'

export default {
  // 切换语言
  SET_LANGUAGE: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  }
}
