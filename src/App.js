import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './component/about/about'
import Contact from './component/contact/contact'
import Header from './component/header/header'
import Menu from './component/menu/menu'
import Navbar from './component/navbar/navbar'
import Statistics from './component/statistics/statistics'
import Footer from './component/footer/footer'
import Team from './component/team/team'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Statistics/>
      <About/>
      <Menu/>
      <Team/>
      <Contact/>
      <Footer/>  
    </div>
  )
}

export default App
