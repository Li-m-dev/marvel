import React, {Component} from 'react';
import {connect} from 'react-redux';
import CharCard from './CharCard';
import {getChars} from '../ducks/reducer';

class Search extends Component {
  state = {
    searchTerm : ""
  }

  handleSearch = () =>{
    this.props.getChars(this.state.searchTerm)
  }
  render(){
    const card = this.props.characters.map(char => {
      return <CharCard key={char.id} char={char}/>
    })
    return(
      <div>
        <input 
          type="text" 
          placeholder="Search by name ..."
          value={this.state.searchTerm}
          onChange={(e)=>this.setState({searchTerm:e.target.value})}
        />
        <button onClick={this.handleSearch}>Search</button>
        {card}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return state
}

export default connect(mapStateToProps,{getChars})(Search);