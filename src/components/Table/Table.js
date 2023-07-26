import React, { useEffect, useState } from 'react'
import classes from './Table.module.css'

const Table = (props) => {
  const [searchData,setSearchData]=useState("");
  const [data,setData]=useState();
  let [dataLoaded,setDataLoaded]=useState(false);
  const getData=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>
      response.json()
    )
    .then((json) =>{ 
      if(json)
      {
        setData(json);
        setDataLoaded(true);  
      }
    });
  } 
  useEffect(()=>{
    getData();
    
  },[]);

  useEffect(()=>{
    if(props.entries) 
    {   setSearchData(props.entries);    }
  },[props.entries])

  return (
    <div className='table-responsive'>
      <table className={`${classes.table} table table-striped rounded my-4`}>
        <thead>
          <tr>
          <th scope="col">Name</th>
          <th scope="col">Userame</th>
          <th scope="col">Email</th>
          <th scope="col">Website</th>
          </tr>
        </thead>       
        <tbody>
        {
        dataLoaded?
        data.filter(
          (item)=>{
          // item.name===data.name?item:null)
          if(searchData=="" )
          { return item; }
          else if(
            item.name.toLowerCase().includes(searchData) || 
            item.username.toLowerCase().includes(searchData) ||
            item.email.toLowerCase().includes(searchData)
          )
          {return item;}    
        })
        .map(item=>
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.website}</td>
          </tr>
          )
          : 
          <tr>
            <td colSpan={4} align='center'>No data</td>
          </tr> 
        }
        </tbody>  
      </table>
    </div>
  )
}

export default Table;