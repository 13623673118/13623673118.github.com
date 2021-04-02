<template>
  <div id="content">
    <StyleEditor ref="styleEditor" :code="currentStyle" />
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enable-html="enableHtml" />
  </div>
  <div id="foot">
    <ThankEditor ref="thankEditor" :markdown="currentThankMarkdown" :enable-html="enableHtml" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, nextTick } from 'vue'
import StyleEditor from '@/components/StyleEditor.vue'
import ResumeEditor from '@/components/ResumeEditor.vue'
import ThankEditor from '@/components/ThankEditor.vue'
import { fullStyle, fullMarkdown, thanksMarkdown } from '@/utils'

interface State {
  interval: number
  currentStyle: string
  enableHtml: boolean
  fullStyle: string[]
  currentMarkdown: string
  currentThankMarkdown: string
  fullMarkdown: string
  thanksMarkdown: string
}

export default defineComponent({
  name: 'App',
  components: {
    StyleEditor,
    ResumeEditor,
    ThankEditor
  },
  setup() {
    const state = reactive<State>({
      interval: 10,
      currentStyle: '',
      enableHtml: false,
      fullStyle: fullStyle,
      currentMarkdown: '',
      currentThankMarkdown: '',
      fullMarkdown: fullMarkdown,
      thanksMarkdown: thanksMarkdown
    })

    const styleEditor = ref()
    const resumeEditor = ref()
    const thankEditor = ref()

    function progressivelyShowStyle(n: number) {
      return new Promise<void>(resolve => {
        let interval = state.interval
        let showStyle = async () => {
          let style = state.fullStyle[n]
          if (!style) return
          // 计算前 n 个 style 的字符总数
          let length = state.fullStyle
            .filter((_, index) => index <= n)
            .map(item => item.length)
            .reduce((pre, cur) => pre + cur, 0)
          let prefixLength = length - style.length
          if (state.currentStyle.length < length) {
            let l = state.currentStyle.length - prefixLength
            let char = style.substring(l, l + 1) || ' '
            state.currentStyle += char
            if (style.substring(l - 1, l) === '\n' && styleEditor.value) {
              nextTick(() => {
                styleEditor.value.goBottom()
              })
            }
            setTimeout(showStyle, interval)
          } else {
            resolve()
          }
        }
        showStyle()
      })
    }

    function progressivelyShowResume() {
      return new Promise<void>(resolve => {
        let length = state.fullMarkdown.length
        let interval = state.interval
        let showResume = () => {
          if (state.currentMarkdown.length < length) {
            state.currentMarkdown = state.fullMarkdown.substring(
              0,
              state.currentMarkdown.length + 1
            )
            let prevChar = state.currentMarkdown[state.currentMarkdown.length - 2]
            if (prevChar === '\n' && resumeEditor.value) {
              nextTick(() => resumeEditor.value.goBottom())
            }
            setTimeout(showResume, interval)
          } else {
            resolve()
          }
        }
        showResume()
      })
    }

    function progressivelyShowThanks() {
      return new Promise<void>(resolve => {
        let length = state.thanksMarkdown.length
        let interval = state.interval
        let showThanks = () => {
          if (state.currentThankMarkdown.length < length) {
            state.currentThankMarkdown = state.thanksMarkdown.substring(
              0,
              state.currentThankMarkdown.length + 1
            )
            let prevChar = state.currentThankMarkdown[state.currentThankMarkdown.length - 2]
            if (prevChar === '\n' && thankEditor.value) {
              nextTick(() => thankEditor.value.goBottom())
            }
            setTimeout(showThanks, interval)
          } else {
            resolve()
          }
        }
        showThanks()
      })
    }

    function showHtml() {
      return new Promise<void>(resolve => {
        state.enableHtml = true
        resolve()
      })
    }

    async function makeResume() {
      await progressivelyShowStyle(0)
      await progressivelyShowResume()
      await progressivelyShowStyle(1)
      await showHtml()
      await progressivelyShowStyle(2)
      await progressivelyShowThanks()
      await progressivelyShowStyle(3)
    }

    makeResume()

    return {
      ...toRefs(state),
      styleEditor,
      resumeEditor,
      thankEditor
    }
  }
})
</script>
