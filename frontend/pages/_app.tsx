import theme from '@hackclub/theme'
import { ThemeProvider } from '@theme-ui/core'
import type { AppProps } from 'next/app'
import "@/styles/grid.scss"
import "@/styles/tables.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
