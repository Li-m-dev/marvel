import React, { Component } from "react";
import IsLoading from "./IsLoading/IsLoading";
import { connect } from "react-redux";
import { getSingleChar, getComics } from "../ducks/reducer";
import ComicModal from "./ComicModal";

class CharDetails extends Component {
  state = {
    clickedComic: false,
    selectedIndex: null
  };

  componentDidMount() {
    this.props.getSingleChar(this.props.match.params.id);
    this.props.getComics(this.props.match.params.id);
    // console.log(this.props)
  }
  render() {
    console.log(this.state);
    const { char, comics } = this.props;
    const comicList = comics.map((comic, i) => {
      return (
        <div
          className="comic-card"
          key={comic.id}
          onClick={() =>
            this.setState({ clickedComic: true, selectedIndex: i })
          }
        >
          <h4>{comic.title}</h4>
          <div>
            <img
              src={
                comic.thumbnail &&
                `${comic.thumbnail.path}.${comic.thumbnail.extension}`
              }
              alt={comic.title}
            />
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2>{char.name}</h2>
        <img
          className="card-img"
          src={
            char.thumbnail &&
            `${char.thumbnail.path}.${char.thumbnail.extension}`
          }
          alt={char.name}
        />
        <p>{char.description}</p>
        {this.props.loading ? (
          <IsLoading />
        ) : (
          <div className="comics-wrapper">{comicList}</div>
        )}
        {this.state.clickedComic && (
          <ComicModal
            closeModal={() => this.setState({ clickedComic: false })}
            comic={comics[this.state.selectedIndex]}
          />
        )}
      </div>
    );
  }
}

export default connect(
  state => state,
  { getSingleChar, getComics }
)(CharDetails);
