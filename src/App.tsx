/* eslint-disable @typescript-eslint/no-unused-vars */
import { RouterApp } from './router/index'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import './App.css'

function App() {
  return (<>
    <Provider store={store}>
      <HashRouter>
        <RouterApp />
      </HashRouter>
    </Provider>
  </>)
}

export default App
