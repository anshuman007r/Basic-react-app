import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [data, setData] = useState({})

  useEffect(()=>{
    axios.get("http://localhost:3000/test").then(res =>{
      const { data = {}} = res || {}
      setData(data)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <p>
            Basic React Application
        </p>
      </header>
      <section className='App-section'>
        <div>Id : { data?.id || ''}</div>
        <div>Name : {data?.name || ''}</div>
      </section>
    </div>
  );
}

export default App;
