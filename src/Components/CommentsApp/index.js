import { Component } from "react";
import "./index.css";
import { v4 as uuidV4 } from "uuid";
import { formatDistanceToNow } from "date-fns";
import CommentsLists from "../CommentsLists";

class CommentsApp extends Component {
  state = {
    commentsList: [],
    nameValue: "",
    commentValue: "",
  };
  changeName = (event) => {
    this.setState({
      nameValue: event.target.value,
    });
  };
  changeComment = (event) => {
    this.setState({
      commentValue: event.target.value,
    });
  };
  submitFormData = (event) => {
    event.preventDefault();
    const { nameValue, commentValue } = this.state;
    const newCommentData = {
      id: uuidV4(),
      title: nameValue,
      comment: commentValue,
      postTime: formatDistanceToNow(new Date()),
      isLike: false,
    };
    if (nameValue && commentValue !== "") {
      this.setState((prevState) => {
        return {
          commentsList: [...prevState.commentsList, newCommentData],
          nameValue: "",
          commentValue: "",
        };
      });
    } else {
      alert("Please Enter Input Details");
    }
  };

  onClickToggleLike = (id) => {
    this.setState((prev) => {
      return {
        commentsList: prev.commentsList.map((each) => {
          if (each.id === id) {
            return { ...each, isLike: !each.isLike };
          }
          return each;
        }),
      };
    });
  };
  onDelteItem = (id) => {
    this.setState((prev) => {
      return {
        commentsList: prev.commentsList.filter((each) => {
          if (each.id !== id) {
            return each;
          }
        }),
      };
    });
  };
  render() {
    const { nameValue, commentValue, commentsList } = this.state;
    return (
      <div className="container">
        <h1 className="title">Comments</h1>
        <div className="sm-image-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="sm-img"
          />
        </div>
        <div className="lg-card-flex">
          <div className="comment-input-card">
            <h3 className="input-card-title">
              Say Something About 4.0 Techonologies
            </h3>
            <form onSubmit={this.submitFormData}>
              <input
                type="text"
                placeholder="Name"
                className="name-input"
                value={nameValue}
                onChange={this.changeName}
              />
              <textarea
                cols="30"
                rows="10"
                className="textarea-input"
                placeholder="Comment"
                value={commentValue}
                onChange={this.changeComment}
              ></textarea>
              <button type="submit" className="add-cmt-btn">
                Add Comment
              </button>
            </form>
          </div>
          <div className="lg-image-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comment"
              className="lg-img"
            />
          </div>
        </div>
        <hr />
        <div className="comments-count-card">
          <b>{commentsList.length}</b>
          <span>Comments</span>
        </div>
        <ul className="comments-list-card">
          {commentsList.map((each) => {
            return (
              <CommentsLists
                each={each}
                key={each.id}
                onClickToggleLike={this.onClickToggleLike}
                onDelteItem={this.onDelteItem}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default CommentsApp;
