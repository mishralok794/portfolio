import { useState } from 'react'
import './header.css'

function Header() {
  let [option, setOptions] = useState(true);


  function handleOptions() {
    console.log(option ,"option butoon")
    setOptions(option == false ? true : false);
    console.log(option ,"option butoon")
  }
  return (
    <div className='header-parent'>
      <div className='portfolio-header'>


        <h2>Welcome KRISHNAAAA GROUP Ltd.</h2>
        <div>
          <samp className='header-mobEmail'>MOB</samp>
          <samp className='header-mobEmail'>E-Mail</samp>
        </div>



        <div className='header-options' onClick={handleOptions}>
          {option ?
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
            :
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
          }
        </div>

      </div>
      {!option && <div className='option-list'>
        <a href='#portfolio'><li>Portfolio</li></a>
        <a href='#work'><li>Work</li></a>
        <a href='#testimonial'> <li>Testimonial</li></a>
        <a href='#contact'><li>Contact</li></a>
      </div>}
      <div className='Header-image'>
       
        <img className='Header-image-2' src="https://firebasestorage.googleapis.com/v0/b/blog-cf1e3.appspot.com/o/images%2Falokfoto.png?alt=media&token=e5c17456-e1f0-4663-93da-3cdf5e0efbc2" alt='' />
        <img className='Header-image-1' src='https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg' />
      </div>
    </div>
  )
}

export default Header