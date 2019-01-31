import React from 'react';
import {Link} from 'react-router-dom';

const CharCard = (props) =>{
  const {char} = props;
  return(
    <div>
      <Link to={`/chardetails/${char.id}`}> 
        <h1>{char.name}</h1>
        <img className="card-img"src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name}/>
      </Link>
    </div>
  )
}

export default CharCard;