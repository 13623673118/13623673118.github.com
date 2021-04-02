import { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      WindiCSS({
        safelist: 'no-select'
      })
    ],
    resolve: {
      alias: [
        {
          find: /^@\//,
          replacement: resolve(__dirname, 'src') + '/'
        },
        {
          find: /^\/#\//,
          replacement: resolve(__dirname, 'types') + '/'
        }
      ]
    }
  }
}
