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

  const onPortfolioCreate = (e:SyntheticEvent)=>{
    e.preventDefault();
    console.log(e);
  }

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>)=>{
      setSearch(e.target.value);
      // console.log(e.target.value);
  }

  const onSearchSubmit= async (e:SyntheticEvent)=>{
    e.preventDefault();
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
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      {serverError &&<h1></h1>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
