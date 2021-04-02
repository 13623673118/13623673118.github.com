<template>
  <div ref="container" :class="['thankEditor', { htmlMode: enableHtml }]">
    <div v-if="enableHtml" v-html="result"></div>
    <pre v-else>{{ result }}</pre>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/runtime-core'
import marked from 'marked'
export default defineComponent({
  name: 'ThankEditor',
  props: {
    markdown: {
      type: String,
      required: true
    },
    enableHtml: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const container = ref()
    const result = computed(() => (props.enableHtml ? marked(props.markdown) : props.markdown))

    function goTop() {
      container.value.scrollTop = 0
    }

    function goBottom() {
      container.value.scrollTop = 100000
    }

    return {
      container,
      result,
      goTop,
      goBottom
    }
  }
})
</script>
