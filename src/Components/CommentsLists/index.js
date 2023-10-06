import "./index.css";

const CommentsLists = (props) => {
  const { each, onClickToggleLike, onDelteItem } = props;
  const { id, title, comment, postTime, isLike } = each;
  const toggleLike = isLike
    ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
    : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";
  const logo = title.slice(0, 1).toUpperCase();
  const onToggleLike = () => {
    onClickToggleLike(id);
  };
  const onDelte = () => {
    onDelteItem(id);
  };
  return (
    <li>
      <h1 className="logo">{logo}</h1>
      <div>
        <div className="item-card-cnt">
          <h1 className="cmt-title">{title}</h1>
          <span className="postTime">{postTime}</span>
        </div>
        <p className="cmt-para">{comment}</p>
        <div className="item-controls">
          <button type="button" onClick={onToggleLike}>
            <img src={toggleLike} alt="like" />
          </button>
          <button type="button" onClick={onDelte}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
              alt="del"
            />
          </button>
        </div>
      </div>
    </li>
  );
};
export default CommentsLists;
