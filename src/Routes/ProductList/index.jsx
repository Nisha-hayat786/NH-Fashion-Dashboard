import React, {useEffect, useState} from 'react'
import { DataGrid} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../Redux/apiCalls";

const ProductList = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDel = (id) => {
    deleteProduct(id, dispatch);
  };

  console.log(products);
  const columns = [
    { field: '_id', headerName: 'ID', width: 300 },
    { field: 'title', headerName: 'Product', width: 340},
    { field: 'onStock', headerName: 'Stock', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'edit', headerName: 'Edit', width: 100, renderCell: (params) => {
      return(
        <Link to={"/product/"+ params.row._id}>
          <button className='edit text-success'><EditIcon/></button>
        </Link>
      )     
    }},
    {field: 'delete', headerName: 'Delete', width: 120, renderCell: (params) => {
      return(
        <div>
          <button className='del text-danger'><ClearIcon onClick={() => handleDel(params.row._id)}/></button>
        </div>
      )     
    }},
  ];
  
  return (
    <div className='m-5' style={{ height:650 }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row._id}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList

