import DataContext from './components/DataContext';

import '../public/style/global.scss'

function App({ Component, pageProps, data }) {
  return (
    <DataContext.Provider value={{ data }}>
      <Component {...pageProps} data={ data } />
    </DataContext.Provider>
  )
}

App.getInitialProps = async (context) => {
  const res =  await fetch('https://randomuser.me/api/?results=50&seed=somethingfun')
  const json = await res.json()
  return { data: json }
}
export default App;
