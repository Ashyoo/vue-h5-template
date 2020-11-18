/* eslint-disable */
// vant国际化,按需引入组件
import Vue from 'vue'
import {i18n, changeLocales} from '@/lang/index'

// vant-ui组件国际化
changeLocales(i18n.locale)

// 1.Tab bar
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)

// Button
import { Button } from 'vant'
Vue.use(Button)

// 搜索
import { Search } from 'vant';
Vue.use(Search);
