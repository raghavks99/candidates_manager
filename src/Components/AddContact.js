import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const AddContact = () => {
    const [text_value, setValue] = useState('');
    const [designation, setAbout] = useState('');
    const [showAlert, setAlert] = useState(false);

    const handleUserName = (e) => {
        setValue(e.target.value);
    }
    const handleAbout = (e) => {
        setAbout(e.target.value);
    }

    const handleClick = async () => {
        if (text_value && designation) {
            await axios.post('http://localhost:3006/candidates', { id: Date.now(), userName: text_value, Designation: designation })
                .then(req => console.log(req))
                .catch(err => console.log(err))

            setAbout('');
            setValue('');
            setAlert(true);

            setTimeout(() => {
                setAlert(false);
            }, 3000);
        }
    }


    return (
        <div>
            <div className="container-fluid bg-success text-white">
                <div className=' text-center fs-3'>Add Candidate Details</div>
            </div>
            {showAlert ? <div class="alert alert-success alert-dismissible fade show" role="alert">
                The new candidate is successfully added
                <button type="button" onClick={() => setAlert(false)} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> : <div> </div>}
            <div className="card w-70" style={{ marginTop: '10%', marginLeft: '20%', marginRight: '20%', borderWidth: '10px' }}>
                <div className="card-body d-flex">
                    <div className='container-fluid d-flex flex-column'>
                        <div className="form-group mt-3 mb-3 w-3">
                            <label for="usr mt-3">Username</label>
                            <input type="text" className="form-control" id="usr" value={text_value} onChange={handleUserName} />
                        </div>
                        <div className="form-group mt-3 mb-4 w-2">
                            <label for="usr">Designation</label>
                            <input type="usr" className="form-control" id="usr" value={designation} onChange={handleAbout} />
                        </div>
                        <button type="button" className="btn btn-primary align-self-baseline mt-3" style={{ float: 'left' }} onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddContact;