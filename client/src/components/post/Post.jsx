import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://blogapi.cudigiclass.in/images/";
  return (
    <Link to={`/post/${post._id}`} className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>

          <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </Link>
  );
}
