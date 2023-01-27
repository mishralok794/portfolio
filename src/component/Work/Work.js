import './work.css'

function Work() {
  return (
    <div className='parent-work' id="work">
 
      <label className='parent-work-caption'>Work</label>


    <div id="carouselExampleCaptions" className="carousel slide">
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i-verve.com/wp-content/uploads/2018/07/chat-application.jpg" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Chat Application</h5>
        <p>I have Developed ChatApplication using React & Firebase</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://shoutem.com/wp-content/uploads/2022/05/How-To-Make-A-Blog-Mobile-App-In-3-Easy-Steps.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>I have Developed Blog Application</h5>
        <p>I have developed Blog Application using React & Bootstrap</p>
      </div>
    </div>
    <div className="carousel-item">
      <img   src="https://img.freepik.com/free-vector/gradient-colored-portfolio-template_52683-79238.jpg?w=2000" className="d-block w-100 carsuel-image" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>I have Developed PorftFolio</h5>
        <p> I have developed PorftFolio using React & Bootstrap </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



  </div>
  )
}

export default Work