import React, {useState} from 'react'
import { DataGrid} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';

const ProductList = () => {

  const rows = [
    { id: 1,  product: 'Huzaifa Saleem', stock: '197', status: 'active', price: 35 },
    { id: 2,  product: 'Cersei', stock: '197', status: 'active', price: 42 },
    { id: 3,  product: 'Jaime', stock: '197', status: 'active', price: 45 },
    { id: 4,  product: 'Arya', stock: '197', status: 'active', price: 16 },
    { id: 5,  product: 'Daenerys', stock: '197', status: 'active', price: null },
    { id: 6,  product: null, stock: '197', status: 'active', price: 150 },
    { id: 7,  product: 'Ferrara', stock: '197', status: 'active', price: 44 },
    { id: 8,  product: 'Rossini', stock: '197', status: 'active', price: 36 },
    { id: 9,  product: 'Harvey', stock: '197', status: 'active', price: 65 },
  ];

  const [data,setData] = useState(rows);

  const handleDel = (id) => {
    setData(data.filter(item => item.id !== id ))
  }

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'product', headerName: 'Product', width: 330},
    { field: 'stock', headerName: 'Stock', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'edit', headerName: 'Edit', width: 100, renderCell: (params) => {
      return(
        <Link to={"/product/"+ params.row.id}>
          <button className='edit text-success'><EditIcon/></button>
        </Link>
      )     
    }},
    {field: 'delete', headerName: 'Delete', width: 120, renderCell: (params) => {
      return(
        <div>
          <button className='del text-danger'><ClearIcon onClick={() => handleDel(params.row.id)}/></button>
        </div>
      )     
    }},
  ];
  
  return (
    <div className='m-5' style={{ height:650 }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList

