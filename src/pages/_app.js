import '@/styles/global.scss'
import Menu from '@/components/molecules/Menu/Menu'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}
