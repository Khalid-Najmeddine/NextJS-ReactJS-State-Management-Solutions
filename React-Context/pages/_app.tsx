import '../styles/globals.css'
import { AppProps } from 'next/app'
import { PokemonProvider } from '../src/contextStore'

export default function MyPokemonApp({ Component, pageProps }: AppProps) {
  return (
    <PokemonProvider pokemon={pageProps.pokemon}>
      <Component {...pageProps} />
    </PokemonProvider>
  )
}
