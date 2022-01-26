import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContainer from './App.Container'
import NoMatch from './Pages/NoMatch';
import Navigation from './component/Navigation';
import Products from './Pages/Products';
import Shopping from './Pages/Shopping';

export default function App() {
  return (
    <ChakraProvider>
      <Navigation/>
      <Router>
        <Routes> 
        <Route path='/' element={<AppContainer/>} />
        <Route path='/product' element={<Products/>} />
        <Route path='/shop' element={<Shopping/>}/>
        <Route path='/*' element={<NoMatch/>} />
        </Routes>
    </Router>
    </ChakraProvider>
  )
}
