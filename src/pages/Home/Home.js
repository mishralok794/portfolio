import Header from '../../component/Header/Header'
import Portfolio from '../../component/Portfolio/Portfolio'
import Work from '../../component/Work/Work'

import Contact from '../../component/contact/contact'

import './home.css'


import './home.css'

function Home() {
  return (
    <div className='parent-home'>
    
    <Header />
    <Portfolio />
    <Work />
    
    <Contact />
   
   
    </div>
  )
}

export default Home