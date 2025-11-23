import './App.css'
import { BrowserRouter as Router,Routes,Route, BrowserRouter,Link } from 'react-router-dom'

import Home from './components/RoutingPractice/Home'
import ToDo from './components/json-server/todo.jsx'
import HomeContext from './components/context/HomeContext.jsx'
import GlobalContextProvider from './components/context/GlobalState.jsx'
import SearchFilter from './components/search-filter/SearchFilter.jsx'
import ComponentUsers from './components/ComponentUsers.jsx'
import Products from './components/Accountiez/Products.jsx'
function App() {
  

  return (
    <>
    <Products/>
    </>
  )
}

export default App
