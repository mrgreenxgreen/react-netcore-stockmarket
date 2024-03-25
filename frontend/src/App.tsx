import React, { ChangeEvent, SyntheticEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { useState } from 'react';
import { searchCompanies } from './api';
import { CompanySearch } from './company';
import {v4 as uuidv4} from "uuid";

function App() {

  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError,setServerError] = useState<string | null>(null);

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      setSearch(e.target.value);
      // console.log(e.target.value);
  }

  const onClick = async (e:SyntheticEvent)=>{
    const result = await searchCompanies(search);
      // console.log(e);
      if(typeof result === "string")
      {
        setServerError(result);
      }else if(Array.isArray(result.data)){
        setSearchResult(result.data);
      }
      console.log(searchResult);
  }

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      {serverError &&<h1></h1>}
      <CardList searchResults={searchResult}/>
    </div>
  );
}

export default App;
