import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ListCandidates() {
    const [contacts, setContact] = useState([])
    const getAPI = async () => {
        await axios.get('http://localhost:3006/candidates')
            .then(res => {
                console.log(res)
                setContact(res.data)
            })
    }
    useEffect(() => {
        getAPI();
    }, [])
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3006/candidates/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        const filteredContact = contacts.filter((contact) =>
            contact.id !== id)
        setContact(filteredContact);
    }
    return (
        <>
            <div className="container-fluid bg-primary text-white shadow-lg">
                <div className='text-center fs-3'>Candidates List</div>
            </div>
            <Link to="/add">
                <button type="button" className="btn btn-danger" style={{ marginLeft: '30px', marginTop: '10px', marginBottom: '15px' }}>Add Candidate</button>
            </Link>
            <div className='container'>
                <div id="main" className="card card-body">
                    {contacts.map((contact, index) => {
                        return (
                            <div key={index}>
                                <div className="card w-100 mb-3 ml-5 mr-5 mt-3 d-flex flex-row">
                                    <div className="card-body d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                        <div style={{ marginLeft: '20px' }}>
                                            <h5 className="card-title">{contact.userName}</h5>
                                            {contact.Designation}
                                        </div>
                                    </div>
                                    <Link to={{ pathname: '/edit', state: { id: contact.id, userName: contact.userName, designation: contact.Designation } }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '35px', marginRight: '20px' }} width="20" height="20" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                        </svg>
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '30px', marginRight: '15px' }} onClick={() => handleDelete(contact.id)} width="30" height="30" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default ListCandidates
