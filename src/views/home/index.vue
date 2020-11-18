<template>
  <div class="home">
    <van-button type="primary" @click="changeLang">切换语言</van-button>
    <van-search v-model="val" placeholder="请输入搜索关键词" show-action />
    <div>{{$t('language')}}</div>
  </div>
</template>

<script>
// 仅用作示例, 请根据业务自行修改
import { changeLocales } from '@/lang'
export default {
  name: 'home',
  data () {
    return {
      num: 0,
      val: ''
    }
  },
  methods: {
    changeLang () {
      this.num++
      changeLocales(this.num % 2 === 0 ? 'en-US' : 'zh-CN')
      this.$i18n.locale = this.num % 2 === 0 ? 'en-US' : 'zh-CN'
    }
  }
}
</script>

<style lang="less">
</style>
