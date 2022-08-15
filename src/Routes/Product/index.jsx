import React from "react";
import Chart from "../../Components/Chart/Chart";
import { productData } from "../../Components/Data/ProductData";
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="mx-5 mt-5 mb-5 d-flex justify-content-between align-items-center">
        <h4 className="fs-4 fw-bold text-black mb-0">Product</h4>
        <Link to="/newProduct"><button className="bg-dark py-2 px-3 text-white border-0">
              Create Product
            </button></Link>
      </div>
      <Chart data={productData} title="Product Sales" dataKey="sales" name="name" />

      <div className="row m-5 d-flex">
        <div className="col-md-4 px-5 py-3">
          <img className="img-fluid" src="/images/clothing.webp" alt="" />
          <form action="">
            <label for="file" className="bg-dark py-2 px-3 mt-4 text-white">
              Change Photo
            </label>
            <input type="file" id="file" className="d-none" />
          </form>
        </div>

        <div className="col-md-4 px-5 py-3">
          <h5 className="fs-5 fw-bold text-black mb-4">Product Details</h5>
          <p>
            Product Id: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">123</span>
          </p>
          <p>
            Product Name: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">Biker Jacket</span>
          </p>
          <p>
            Product Price: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">Rs. 5000</span>
          </p>
          <p>
            Product Sales: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">100</span>
          </p>
          <p>
            Product Status: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">Active</span>
          </p>
          <p>
            Product In Stock: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">Yes</span>
          </p>
          <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati optio</p>
        </div>

        <div className="col-md-4 px-5 py-3">
        <h5 className="fs-5 fw-bold text-black mb-4">Edit Details</h5>
        <Form>
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
              Edit Details
            </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
