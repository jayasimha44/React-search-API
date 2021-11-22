import React from "react";
import { Link } from "react-router-dom";
import PostDetail from "./PostDetail";

const Post = ({ post }) => {
  const postHandler = (id) => {
    <PostDetail key={id} />;
  };
  return (
    <div>
      <li className="list-group-item" key={post.id}>
        <Link to={`/posts/${post.id}`} onClick={(e) => postHandler(post.id)}>
          {post.title}
        </Link>
      </li>
    </div>
  );
};

export default Post;
