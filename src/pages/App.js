import '../styles/App.css';
import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import SearchBar from '../components/Searchbar'
import DropBox from '../components/DropDown'


  function App() {
      const [chars, setData] = useState(null)

      useEffect( () => {
        const characters = async () => {
           const {data} = await axios.get("https://rickandmortyapi.com/api/character/?page=1");
           setData(data.results.slice(0, 15))
        } 
        characters()
      }, [setData])

    return (
      <div className="App">
          <div>
              <span>Challenge 1. Searchbar con etiquetas. {chars === null ? 'loading' : chars[1].id}</span>
              <SearchBar />
          </div>
          <div>
              <span>Challenge 2. Dropdown con consumo de API.</span>
              <DropBox />
          </div>
      </div>
    );
  }
  
  export default App;