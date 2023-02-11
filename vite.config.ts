import {resolve} from 'path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'

const resolvePath = (str: string) => resolve(__dirname, str)

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
            },
            plugins: [
                typescript({
                    sourceMap: true,
                    /*              allowSyntheticDefaultImports: true,
                                  declaration: true,
                                  declarationDir: resolvePath('../dist'),
                                  exclude: resolvePath('../node_modules/!**'),
                                  rootDir: resolvePath('../src'),
                                  target: 'es2020',*/
                })
            ],
        }
    },
    plugins: [react()],
})