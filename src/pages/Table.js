import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import "./Table.css";
import { useEffect,useState } from 'react';
import SideBar from '../componenets/SideBar';

export default function DataTable() {

  const [columns1, setColumns1] = useState({ field: 'id', headerName: 'ID', width: 70 });

  async function fetchPost() {
    console.clear();
    const responce = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR"
    );
    console.log(responce);
    console.log(responce.data.coins);
 
  }

  useEffect(() => {
    fetchPost()
  }, [])

  


  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'age',headerName: 'Age',type: 'number',width: 90,},
    {field: 'fullName',headerName: 'Full name',description: 'not sortable.',sortable: false,width: 160,}
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


  return (
    <div  style={{ height: 400, width: '100%',marginLeft: 220 }}>
    <SideBar/>
<DataGrid  
rows={rows}
columns={columns}
pageSize={5}
rowsPerPageOptions={[5]}
/>
    </div>
  );
}





