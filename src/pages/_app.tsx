import '@/styles/globals.css'
import "@/styles/locomotive.css"
import "../components/feature/common/CustomCursor/styles.css"
import { SmoothScrollProvider } from "../contexts/SmoothScroll.context"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothScrollProvider>
      <Component {...pageProps} />
    </SmoothScrollProvider>
  );
}
