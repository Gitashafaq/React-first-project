import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav";
import Card from "./components/Card"
import Footer from './components/Footer';
import posts from "./components/db/posts";

function loadData(v){
  return(
    
    <div className='col-md-4'>
    <Card img={v.img} title={v.title}desc={v.desc} author={v.author} date={v.date}/>
    </div>
  );
}



function App() {
  return (
  <>
    <Nav/>
    <div className='container my-5'>
      <div className="row" style={{gap:"30px 0px"}}>

      {posts.map(loadData)}



      </div>
    </div>
      <Footer/>
  
  </>
  )
}

export default App;
