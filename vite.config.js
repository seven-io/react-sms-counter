import {resolve} from 'path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
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