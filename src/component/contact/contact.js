import './contact.css'

function contact() {
  return (

    <div className='parent-contact' id='contact'>

    <h3>Fill Your Contact Details</h3>

      <div className='inputField'>
        <div className='row ' >
          <div className='col'>
            <label>FirstName</label>
            <input className='form-control' type='text' />
          </div>

          <div className='col'>
            <label>LastName</label>
            <input className='form-control ' type='text' />
          </div>

        </div>


        <div className='row contact-email' >
          <div className='col'>
            <label>Email</label>
            <input className='form-control' type='email' />
          </div>

          <div className='col'>
            <label>Password</label>
            <input className='form-control ' type='password' />
          </div>

        </div>


        <div className='address-Detail'>

        <h3>Address Details</h3>
        
        <div className='row' >
          <div className='col'>
            <label>State</label>
            <input className='form-control' type='text' />
          </div>

          <div className='col'>
            <label>Dirstic</label>
            <input className='form-control ' type='text' />
          </div>

          <div className='col'>
            <label>PinCode</label>
            <input className='form-control ' type='text' />
          </div>

        </div>
        
        </div>
        

      </div>





    </div>

  )
}

export default contact