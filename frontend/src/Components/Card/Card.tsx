import React from 'react'
import imgCard from "../../assets/nebula2.png"
import "./Card.css"
import { CompanySearch } from '../../company';

interface Props
{
  id:string;
  searchResult: CompanySearch;

  
}

const Card: React.FC<Props> = ({id, searchResult}:Props): JSX.Element => 
{
  return (
    <div className="card">
        <img    
            src={imgCard}
            alt="company logo"
            height="200"
            width="200"
            />
            <div className="details">
              <h2>{searchResult.name} ({searchResult.symbol})</h2>
              <p>{searchResult.currency}</p>
            </div>
            <p className='info'>
              {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
    </div>
  )
}

export default Card