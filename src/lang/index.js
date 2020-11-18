import Vue from 'vue'
import { Locale } from 'vant'
import VueI18n from 'vue-i18n'
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'
import zhTW from 'vant/es/locale/lang/zh-TW'
import enUSLocale from './en-US'
import zhCNLocale from './zh-CN'
import zhTWLocale from './zh-TW'

Vue.use(VueI18n)

const messages = {
  'en-US': {
    ...enUS,
    ...enUSLocale
  },
  'zh-CN': {
    ...zhCN,
    ...zhCNLocale
  },
  'zh-TW': {
    ...zhTW,
    ...zhTWLocale
  }
}

const langList = ['zh-CN', 'zh-TW', 'en-US']

function getLanguage () {
  const lang = localStorage.getItem('lang')
  if (lang) return lang

  const browserLang = navigator.language || navigator.browserLanguage
  if (langList.includes(browserLang)) return browserLang
}

// 更新vant组件库本身的语言变化，支持国际化
function changeLocales (lang) {
  if (lang === 'en-US') {
    Locale.use(lang, enUS)
  } else if (lang === 'zh-CN') {
    Locale.use(lang, zhCN)
  } else if (lang === 'zh-TW') {
    Locale.use(lang, zhTW)
  }
  localStorage.setItem('lang', lang)
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages
})

export { i18n, changeLocales }
