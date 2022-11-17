import { Provider } from 'react-redux'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

import { HomePage } from './pages/Home/index'

import { store } from 'store'
import GlobalStyles from 'styles/global'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <GlobalStyles />
        <Header />
        <HomePage />
        <Footer />
      </Provider>
    </div>
  )
}

export default App
