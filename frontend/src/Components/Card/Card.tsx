import React from 'react'
import imgCard from "../../assets/nebula2.png"
import "./Card.css"

interface Props
{
  companyName:string;
  ticker:string;
  price:number;
}

const Card: React.FC<Props> = ({companyName, ticker,price}:Props): JSX.Element => 
{
  return (
    <div className="card">
        <img    
            src={imgCard}
            alt="image"
            height="200"
            width="200"
            />
            <div className="details">
              <h2>{companyName} ({ticker})</h2>
              <p>{price}</p>
            </div>
            <p className='info'>
              Lorem ipsum the quick brown fox jumped over the lazy dog.
            </p>
    </div>
  )
}

export default Card