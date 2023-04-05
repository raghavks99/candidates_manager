import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function EditContact() {
  const location = useLocation();
  const { id } = location.state;
  const { userName } = location.state;
  const { designation } = location.state;

  const [name, setName] = useState(userName);
  const [desig, setDesignation] = useState(designation);
  const [showAlert, setAlert] = useState(false);

  const handleUserName = (e) => {
    setName(e.target.value);
  }

  const handleDesignation = (e) => {
    setDesignation(e.target.value);
  }

  const handleSubmit = async() => {
    await axios.patch(`http://localhost:3006/candidates/${id}`, {"userName" : name, "Designation": desig})
    .then(res => console.log(res))
    .catch(err => console.log(err))
    setName('');
    setDesignation('');
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  return (
    <div>
      <div className="container-fluid bg-success text-white">
        <div className=' text-center fs-3'>Edit Candidate Details</div>
      </div>
      {showAlert ? <div class="alert alert-success alert-dismissible fade show" role="alert">
        The candidate details successfully editted
        <button type="button" onClick = {() => setAlert(false)} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> : <div> </div>}
      <div className="card w-50" style={{ marginTop: '20px', marginLeft: '24%', borderWidth: '10px' }}>
        <div className="card-body d-flex">
          <div className='container-fluid d-flex flex-column'>
            <div className="form-group mt-3 mb-3 w-3">
              <label for="usr mt-3">Username</label>
              <input type="text" className="form-control" id="usr" value={name} onChange={handleUserName} />
            </div>
            <div className="form-group mt-3 mb-4 w-2">
              <label for="usr">Designation</label>
              <input type="usr" className="form-control" id="usr" value={desig} onChange={handleDesignation} />
            </div>
            <button type="button" className="btn btn-primary align-self-baseline mt-3" style={{ float: 'left' }} onClick={handleSubmit}>Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditContact;
