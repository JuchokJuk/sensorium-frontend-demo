import '@/styles/globals.css'
import { SmoothScrollProvider } from "../contexts/SmoothScroll.context"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Component {...pageProps} />
    </SmoothScrollProvider>
  );
}
