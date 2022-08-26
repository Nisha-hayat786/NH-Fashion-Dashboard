import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../Redux/apiCalls";
import { useDispatch } from "react-redux";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
        });
      }
    );
  };

  console.log(file)

  return (
    <div className='m-5'>
      <h4 className="fs-4 fw-bold text-black mb-4">Create New Product</h4>
        <Form className='col-md-6'>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control name='file' type="file" onChange={(e) => setFile(e.target.files[0])} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-0">Product Name</Form.Label>
        <Form.Control name='title' type="text" placeholder="Biker Jacket" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-0">Product Description</Form.Label>
        <Form.Control name='desc' type="text" placeholder="Description" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-0">Product Categories</Form.Label>
        <Form.Control name='cat' type="text" placeholder="Man, pants" onChange={handleCat}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-0">Product Colour</Form.Label>
        <Form.Control name='file' type="text" placeholder="Back" onChange={handleChange}/>
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-0">Price</Form.Label>
        <Form.Control name='price' type="number" placeholder="100" onChange={handleChange}/>
      </Form.Group>
      <Form.Label className="mb-0">In Stock</Form.Label>
      <Form.Select name='onStock' aria-label="Default select example" onChange={handleChange}>
      <option>Yes</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </Form.Select>
    </Form>
    <button onClick={handleClick} className="bg-dark py-2 px-3 mt-4 text-white border-0">
              Create Product
            </button>
    </div>
  )
}

export default NewProduct
