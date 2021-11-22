import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  const getPost = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setPost(response.data);
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mt-5">
      <h4>PostDetail</h4>
      <div className="card p-5">
        <h4>{post.title}</h4>
        <div className="card-body"> {post.body}</div>
      </div>
    </div>
  );
};

export default PostDetail;
