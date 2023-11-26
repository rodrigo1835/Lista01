import '@/styles/globals.css'
import Card from '@/components/card'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Card tittle='Batata' price= 'Preço: R$10' description='Quentinha e deliciosa'/>

      <Card tittle='Batata' price= 'Preço: R$14' description='Quentinha e fria'/>

      <Card tittle='Batata' price= 'Preço: R$5' description='Capenga e murcha'/>
    </>
  )
   
}
