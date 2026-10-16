import { Montserrat } from 'next/font/google'
import '@/styles/tailwind.css'
import 'focus-visible'

// Self-hosted at build time, so the site no longer depends on Adobe Fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-montserrat: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
