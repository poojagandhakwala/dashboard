import Table from "./components/Table/Table";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import {  useState } from "react";

function App() {

  const [data,setData]=useState("");
  const sendData = (item) => {
    // console.log(item);
    setData(item);
  };


  return (
    <div className="App bg-light bg-gradient ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-auto bg-light border sticky-top">
            <Sidebar/>
          </div>
        <div className="col-sm  pt-0 pb-3 min-vh-100 ">
          <Navbar sendData={sendData}/>
          <Table entries={data}/>
        </div>
        </div>
        </div>
    </div>   
  );
}

export default App;