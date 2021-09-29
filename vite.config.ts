import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '\/^~\/': '',
            '@': path.resolve(__dirname, '/src'),
            '~': path.resolve(__dirname, '/node_modules'),
        },
    },
    optimizeDeps: {
        include: ["lodash", 'ant-design-vue', '@ant-design-vue/use']
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    "primary-color": "#f87171",
                    "black": "#333333",
                    "layout-header-background": "#333333",
                    "layout-header-height": "52px",
                    "link-color": "#1DA57A",
                    "border-radius-base": "8px",
                },
                javascriptEnabled: true,
            },
            sass: {},
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        }
    }
})
