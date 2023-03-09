import '@/styles/globals.css'
import "../components/feature/common/CustomCursor/styles.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
