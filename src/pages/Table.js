import axios from 'axios';
import "./Table.css";
import { useEffect,useState,useContext } from 'react';
import SideBar from '../componenets/SideBar';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import { v4 as uuidv4 } from 'uuid';
import MainContext from "../Context/MainContext";

export default function DataTable() {
  const {setShowBitcoin,setShowEtherium,setShowTheter,
  } = useContext(MainContext);

  const [columns1, setColumns1] = useState("");
  async function fetchPost() {
    console.clear();
    const responce = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR"
    );
    console.log(responce);
    console.log(responce.data.coins);
    const coins = responce.data.coins;
    setColumns1(coins);
  }

  useEffect(() => {
    fetchPost();
    console.log("fetch post")
  }, [])

  function Showfunc(event){
    if (event === 'Bitcoin'){
      setShowBitcoin(true)
    }
    else if (event === 'Etherium'){
      setShowEtherium(true)
    }
    else if (event === 'Tether'){
      setShowTheter(true)
    }

  }


  return (
    <div  style={{ height: 400, width: '80%',marginLeft: 220 }}>
    <SideBar/>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 50 }} aria-label="caption table">
            <TableHead>
              <TableRow>
              <TableCell >Icon</TableCell>
                <TableCell>Name</TableCell>
                <TableCell >24Change</TableCell>
                <TableCell >Price</TableCell>
                <TableCell >Price (btc)</TableCell>
                <TableCell >Market Cap</TableCell>
                <TableCell >Volume24H</TableCell>
                <TableCell >Buttons</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...columns1].map((item) => (
                <TableRow key={uuidv4()}>
                <TableCell component="th" scope="row"> <img alt ="img" src={item.icon}></img></TableCell>
                  <TableCell component="th" scope="row"> {item.name}</TableCell>
                  <TableCell component="th" scope="row"> {item.priceChange1d}</TableCell>
                  <TableCell component="th" scope="row"> {item.price}</TableCell>
                  <TableCell component="th" scope="row"> {item.priceBtc}</TableCell>
                  <TableCell component="th" scope="row"> {item.marketCap}</TableCell>
                  <TableCell component="th" scope="row"> {item.volume}</TableCell>
                  <TableCell component="th" scope="row"> <button onClick={()=>Showfunc(item.name)}>&#x1F5E0;</button></TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={columns1.length}
                rowsPerPage={10}
           
             
              />
            </TableRow>
          </TableFooter>
          </Table>
        </TableContainer>
        </div>
      );
    }


