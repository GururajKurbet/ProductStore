import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import { Button,Box, useColorModeValue } from '@chakra-ui/react'
import { Route,Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      {/*Navbar*/}
      <NavBar/>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/create' element={<CreatePage/>} />
      </Routes>
    </Box>
    </>
  )
}

export default App
