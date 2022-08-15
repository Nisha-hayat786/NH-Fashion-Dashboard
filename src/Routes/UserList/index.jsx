import React, {useState} from 'react'
import { DataGrid} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import "../UserList/userlist.css";
import { Link } from 'react-router-dom';

const UserList = () => {

  const rows = [
    { id: 1,  userName: 'Huzaifa Saleem', email: 'nishafatima.da031@gmail.com', status: 'active', transaction: 35 },
    { id: 2,  userName: 'Cersei', email: 'nishafatima.da031@gmail.com', status: 'active', transaction: 42 },
    { id: 3,  userName: 'Jaime', email: 'nishafatima.da031@gmail.com', status: 'active', transaction: 45 },
    { id: 4,  userName: 'Arya', email: 'nishafatima.da031@gmail.com', status: 'active', transaction: 16 },
    { id: 5,  userName: 'Daenerys', email: 'nishafatima.da031@gmail.com', status: 'active', transaction: null },
    { id: 6,  userName: null, email: 'nishafatima.da031@gmail.com', status: 'active', transaction: 150 },
    { id: 7,  userName: 'Ferrara', email: 'nishafatima.da031@gmail.com', status: 'active', transaction: 44 },
    { id: 8,  userName: 'Rossini', email: 'nishafatima.da031@gmail.com', status: 'active', transaction: 36 },
    { id: 9,  userName: 'Harvey', email: 'nishafatima.da031@gmail.com', status: 'active', transaction: 65 },
  ];

  const [data,setData] = useState(rows);

  const handleDel = (id) => {
    setData(data.filter(item => item.id !== id ))
  }

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'userName', headerName: 'User name', width: 200 },
    { field: 'email', headerName: 'Email', width: 330 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'transaction', headerName: 'Transaction', width: 150 },
    { field: 'edit', headerName: 'Edit', width: 100, renderCell: (params) => {
      return(
        <Link to={"/user/"+ params.row.id}>
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

export default UserList
