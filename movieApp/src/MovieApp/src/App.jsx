import { useState, useEffect } from 'react'
import './App.css'
import api from './assets/api/axiosConfig'
import React from 'react'

function App() {
 
  const [movies, SetMovies] = useState([])
  //console.log("Component run")

  
  async function getMovies() {

    try {
      const response = await api.get('api/v1/movies')
      console.log(response.data)
      SetMovies(response.data)
      
    } catch(err) {
      console.log(err)
    }
    
  }

  useEffect(() => {getMovies()},[])
  return (
    <>
     
    </>
  )
}

export default App
