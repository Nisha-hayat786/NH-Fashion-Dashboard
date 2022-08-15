import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux/es/exports';
import { login } from '../../Redux/apiCalls';

const LogIn = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    login(dispatch, { username, password});
  }
  return (
    <div className='m-5'>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-0">Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-0">Password</Form.Label>
        <Form.Control type="text" placeholder="Enter Password" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
    </Form>
    <button className="bg-dark py-2 px-3 mt-4 text-white border-0" onClick={handleClick}>
              Log In
            </button>
    </div>
  )
}

export default LogIn
