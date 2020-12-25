import React from "react";
import axios from "axios";
import s from "./Posts.module.css";

class Posts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentWillMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({ posts: res.data });
    });
  }
  render() {
    const postsList = this.state.posts.map((post) => (
      <div key={post.id} className={s.post}>
        <div>
          <h2>{post.title}</h2>
        </div>
        <div>
          <img src='https://via.placeholder.com/150/d32776' alt='' />
        </div>
        <div>
          <p>{post.body}</p>
        </div>
      </div>
    ));
    return <div className={s.posts}>{postsList}</div>;
  }
}

export default Posts;
