import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Dashboard from './components/dashboard/dashboard'
import SearchBar from './components/searchBar/searchBar'


const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <SearchBar />
        <Dashboard />
      </div>
    </Provider>
  )
}

export default App
