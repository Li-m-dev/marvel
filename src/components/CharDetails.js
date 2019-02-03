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
    const comicList = comics.map(comic=>{
      return (
        <div className="comic-card" key={comic.id}>
          <h4>{comic.title}</h4>
          <div>
            <img src={comic.thumbnail && `${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title}/>
          </div>
        </div>
      )
    })
    return (
      <div>
        <h2>{char.name}</h2>
        <img className="card-img"src={char.thumbnail && `${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name}/>
        <p>{char.description}</p>
        {this.props.loading 
        ? <h2>Loading Comics</h2> 
        :<div className="comics-wrapper">
          {comicList}
        </div> }
      </div>
    );
  }
}

export default connect(state=>state,{getSingleChar, getComics})(CharDetails);