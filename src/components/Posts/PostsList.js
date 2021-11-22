import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (!posts) {
    <p>No Posts to Display!</p>;
  }
  return (
    <div className="container">
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          <h3>Posts</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </li>{" "}
        {posts
          // eslint-disable-next-line
          .filter((post) => {
            if (searchTerm === "") {
              return post;
            } else if (
              post.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post) => (
            <Post post={post} key={post.id} />
          ))}
      </ul>
    </div>
  );
};

export default PostsList;
