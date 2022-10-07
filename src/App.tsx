import { Provider } from 'react-redux'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { UserInfo } from './components/Users/UsersInfo'

import { HomePage } from './pages/Home/HomePage'

import { store } from 'store'
import GlobalStyles from 'styles/global'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <GlobalStyles />
        <Header />
        <HomePage />
        <UserInfo />
        <Footer />
      </Provider>
    </div>
  )
}

export default App
