import { useEffect, useState } from 'react'
import './Portfolio.css'

function Portfolio() {

  let [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("portfolio.json")
      .then(res => res.json())
      .then(res => {
        setPortfolio(res);
        // console.log(res)
      })
  }, [])


  // portfolio.forEach(element => {
  //   console.log(element.name)
  // });


  return (
    <div className='parent-portfolio' id='portfolio'>

      <div className='fortFolio-header'>PortFolio</div>
      <div className='row parent-card'>


{  
  portfolio.map((data,i)=>{
    return(
      <div className='card col-3'> 
        
      <img className='card-image' src={data.image} alt='/'/>
      <div className='card-details'>
      <h5>Name:&nbsp;{data.name}</h5>
      <p>{data.descr}</p>
      </div>
      
      </div>
    )
  })
        
        
        
}

      </div>
    </div>
  )
}

export default Portfolio