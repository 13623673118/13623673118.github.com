<template>
  <div ref="container" class="styleEditor">
    <div class="code" v-html="codeInStyleTag"></div>
    <pre class="" v-html="highlightedCode"></pre>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/runtime-core'
import Prism from 'prismjs'
export default defineComponent({
  name: 'Editor',
  props: {
    code: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const highlightedCode = computed(() => Prism.highlight(props.code, Prism.languages.css, 'css'))
    const codeInStyleTag = computed(() => `<style>${props.code}</style>`)
    const container = ref()
    const goBottom = () => {
      container.value.scrollTop = 100000
    }

    return {
      highlightedCode,
      codeInStyleTag,
      container,
      goBottom
    }
  }
})
</script>

<style scoped>
.code {
  display: none;
}
</style>
