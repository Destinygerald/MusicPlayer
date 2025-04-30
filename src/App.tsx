import './App.css'
import { Layout } from './components/Layout'
import { Navbar } from './components/Navbar'
import { Provider } from './context/Provider'
import './fontface.css'

function App() {
  return (
    <Provider>
      <div className='app'>
          <Navbar />
          <Layout />
      </div>
    </Provider>
  )
}

export default App
