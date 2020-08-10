import '../public/style/global.scss'

/*
  NOTE: APP Components
  - Enables us to use the global styles across the app
*/
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
