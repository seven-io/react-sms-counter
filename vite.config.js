import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: 'react-sms-counter',
            name: 'SevenSmsCounterReact',
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    }
})