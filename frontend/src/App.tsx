import React, { ChangeEvent, SyntheticEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState<string>("");

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      setSearch(e.target.value);
      console.log(e.target.value);
  }



  const onClick = (e:SyntheticEvent)=>{
      console.log(e);
  }

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList/>
    </div>
  );
}

export default App;
