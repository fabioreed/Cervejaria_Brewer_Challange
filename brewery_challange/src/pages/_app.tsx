import GlobalStyles from '@/styles/globalStyles'
import ResetStyles from '@/styles/reset'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ResetStyles />
      <GlobalStyles />
      <Component {...pageProps}  />
    </main>
  )
}
