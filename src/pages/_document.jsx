import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props) {
  // Sproakkoden maa foelge aktiv locale, ellers melder de engelske sidene seg
  // som norske til skjermlesere og soekemotorer.
  const lang = props.__NEXT_DATA__?.locale ?? 'no'

  return (
    <Html className="h-full antialiased bg-white" lang={lang}>
      <Head>
        <link rel="icon" href="/media/favicon.svg" />
      </Head>
      <body className="flex flex-col h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
