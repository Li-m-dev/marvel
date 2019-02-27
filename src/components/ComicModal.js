import React from "react";
import ReactLoading from "react-loading";

const ComicModal = props => {
  console.log("props: ", props.comic);
  const { comic } = props;
  return props.comic ? (
    <div className="comic-modal">
      <div>
        <img
          src={
            comic.thumbnail &&
            `${comic.thumbnail.path}.${comic.thumbnail.extension}`
          }
          alt={comic.title}
        />
      </div>
      <p>{comic.description}</p>
      <button onClick={props.closeModal}>X</button>
    </div>
  ) : (
    <div>
      {" "}
      <ReactLoading
        type="spinningBubbles"
        color="blue"
        height={"20px"}
        width={"20px"}
      />
    </div>
  );
};

export default ComicModal;
