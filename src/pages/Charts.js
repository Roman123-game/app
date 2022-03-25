
import React from 'react'
import SideBar from '../componenets/SideBar'
import { Line} from 'react-chartjs-2';
import "./Charts.css";
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);


const Charts = () => {

const [loadData,setLoadData]= useState('');
const [etherium,setEtherium]= useState('');
const [tether, setTether] =useState('');
const middleBitcoin=[];
 async function fetchData() {
  console.clear();
  const responce = await axios.get(
  "https://api.coinstats.app/public/v1/charts?period=1m&coinId=ethereum"
  );
  console.log(responce);
  console.log(responce.data.chart);
  const points = responce.data.chart;
 const Bitcoin = points.map(point => point[1]);
 setLoadData(Bitcoin);

 const etheriumMajor = points.map(point => point[0]);
 setEtherium(etheriumMajor);
 console.log(etheriumMajor);

 const tetherMajor = points.map(point => point[2]);
 setTether(tetherMajor);
}


function hideBitcoin(){
  setLoadData('')
}
function hideEtherium(){
  setEtherium('')
}
function hideTether(){
  setTether('')
}


  useEffect(() => {
    fetchData();
    console.log("fetch data")
  }, [])

const data = {
  labels: [1, 2, 3,4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,30,31],
  datasets: [
    {
      label: "Bitcoin",
      data: loadData,
      fill: false,
      borderColor: "red"
    },
    {
      label: "Ethereum",
      data:  etherium,
      fill: false,
      borderColor: "green"
    } ,
    {
      label: "Tether",
      data:  tether,
      fill: false,
      borderColor: "blue"
    }
    
    
    
  ]
};




  return (
    <div className='chart'>
    <SideBar />
     <Line data={data}/>
     <label style={{color:'red'}}> Delete Bitcoin
     <input  onChange={hideBitcoin} type="checkbox"></input>
     </label>
     <label style={{color:'green'}}>Delete Ethereum
     <input onChange={hideEtherium} type="checkbox"></input>
     </label>
     <label style={{color:'blue'}}> Delete Tether
     <input onChange={hideTether}  type="checkbox"></input>
     </label>
    </div>
  )
}
 
export default Charts;