import React, { useState, useEffect } from 'react';
import './App.css';
import Charts from './Charts';

export default function App() {
  const [data, setData] = useState([]);
  
    useEffect(() => {
      getUser()
  }, []);

const getUser = async () => {
      const res = await fetch('https://randomuser.me/api');
      const {results} = await res.json();
      setData(results);
      console.log(results)
}

//If to use it without button NEXT, hen we can just use this code:

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('https://randomuser.me/api');
  //     const {results} = await res.json();
  //     setData(results);
  //     console.log(results)
  //   };
  //   fetchData();
  // }, []);

  return <>
  <h2> Random User</h2>
     {(data.map((item,index)=>{
       return(
         <>
         <div className="card" key={index}>
           <img src={item.picture.large} />
           <h3>{item.name.title} {item.name.first} {item.name.last}</h3>
           <p style={{textTransform: "capitalize"}} >{item.gender}  ( {item.dob.age} )</p>
           <p><strong>City :</strong>{item.location.city} <strong>State :</strong> {item.location.state} <strong>Country :</strong>{item.location.country}</p>
           <p>&#9993; {item.email}</p>
           <p>&#128222; {item.phone} | {item.cell}</p>

         
        <button onClick={getUser} > NEXT </button>
        </div>
         </>
       )
     }))}
     <div className="card">
        <Charts/>
     </div>
     
  </>
}
