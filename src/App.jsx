import { useState } from 'react'
import 'animate.css';
import gsap from 'gsap';

import './App.css'

import Header from "./views/header"
import MainPage from "./views/mainPage"

function App() {

  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default App
