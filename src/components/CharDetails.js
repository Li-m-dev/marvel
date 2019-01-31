import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSingleChar} from '../ducks/reducer';

class CharDetails extends Component {
  componentDidMount(){
    this.props.getSingleChar(this.props.match.params.id)
  }
  render() {
    const {char} = this.props;
    return (
      <div>
        <h2>{char.name}</h2>
        <img className="card-img"src={char.thumbnail && `${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name}/>
        <p>{char.description}</p>
      </div>
    );
  }
}

export default connect(state=>state,{getSingleChar})(CharDetails);