import React, { useEffect, useMemo, useState } from "react";
import Chart from "../../Components/Chart/Chart";
import Form from 'react-bootstrap/Form';
import {Link, useLocation} from "react-router-dom";
import { useSelector } from "react-redux";
import { userRequest } from "../../Redux/requestMethods";


const Product = () => {

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  console.log(pStats)

  return (
    <div>
      <div className="mx-5 mt-5 mb-5 d-flex justify-content-between align-items-center">
        <h4 className="fs-4 fw-bold text-black mb-0">Product</h4>
        <Link to="/newProduct"><button className="bg-dark py-2 px-3 text-white border-0">
              Create Product
            </button></Link>
      </div>
      <Chart data={pStats} title="Product Sales" dataKey="Sales" name="name" />

      <div className="row m-5 d-flex">
        <div className="col-md-4 px-5 py-3">
          <img className="img-fluid" src={product.img[2]} alt="" />
          <form action="">
            <label htmlFor="file" className="bg-dark py-2 px-3 mt-4 text-white">
              Change Photo
            </label>
            <input type="file" id="file" className="d-none" />
          </form>
        </div>

        <div className="col-md-4 px-5 py-3">
          <h5 className="fs-5 fw-bold text-black mb-4">Product Details</h5>
          <p>
            Product Id: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">{product._id}</span>
          </p>
          <p>
            Product Name: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">{product.title}</span>
          </p>
          <p>
            Product Price: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">Rs. {product.price}</span>
          </p>
          <p>
            Product Sales: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">100</span>
          </p>
          {/* <p>
            Product Status: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">Active</span>
          </p> */}
          <p>
            Product In Stock: &nbsp; &nbsp;
            <span className="fs-6 text-normal text-black-50">{product.onStock}</span>
          </p>
          <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati optio</p>
        </div>

        <div className="col-md-4 px-5 py-3">
        <h5 className="fs-5 fw-bold text-black mb-4">Edit Details</h5>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-0">Product Name</Form.Label>
        <Form.Control type="text" placeholder={product.title} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-0">Price</Form.Label>
        <Form.Control type="text" placeholder={product.price} />
      </Form.Group>
      <Form.Label className="mb-0">In Stock</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>{product.onStock}</option>
      <option value="yes">True</option>
      <option value="no">False</option>
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
