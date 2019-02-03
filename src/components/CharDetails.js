import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleChar, getComics } from '../ducks/reducer';


class CharDetails extends Component {
  componentDidMount(){
    this.props.getSingleChar(this.props.match.params.id);
    this.props.getComics(this.props.match.params.id);
    console.log(this.props)
  }
  render() {
    const {char, comics} = this.props;
    const comic = comics.map(comic=>{
      return (
        <div className="comic-card">
          <h4>{comic.title}</h4>
          <img src={`${comic.images[0].path}.${comic.images[0].extension}`} alt={comic.title}/>
        </div>
      )
    })
    return (
      <div>
        <h2>{char.name}</h2>
        <img className="card-img"src={char.thumbnail && `${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name}/>
        <p>{char.description}</p>
        <div className="comics-wrapper">
          {comic}
        </div>
      </div>
    );
  }
}

export default connect(state=>state,{getSingleChar, getComics})(CharDetails);