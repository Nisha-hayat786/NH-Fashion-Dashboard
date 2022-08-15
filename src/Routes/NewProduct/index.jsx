import React from 'react'
import Form from 'react-bootstrap/Form';

const NewProduct = () => {
  return (
    <div className='m-5'>
      <h4 className="fs-4 fw-bold text-black mb-4">Create New Product</h4>
        <Form className='col-md-6'>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-0">Product Name</Form.Label>
        <Form.Control type="text" placeholder="Biker Jacket" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-0">Status</Form.Label>
        <Form.Control type="text" placeholder="active" />
      </Form.Group>
      <Form.Label className="mb-0">In Stock</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>Yes</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </Form.Select>
    </Form>
    <button className="bg-dark py-2 px-3 mt-4 text-white border-0">
              Create Product
            </button>
    </div>
  )
}

export default NewProduct
