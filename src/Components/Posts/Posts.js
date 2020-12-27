import React from "react";
import axios from "axios";
import s from "./Posts.module.css";
import Post from "../Post/Post";

class Posts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      post: null,
    };
  }
  componentDidMount() {
    axios
      .get("https://blog-28321-default-rtdb.firebaseio.com/posts.json")
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((e) => console.log(e));
  }
  render() {
    let posts = <p>Wait</p>;

    const changePost = (key) => {
      posts = <Post key={key} obj={this.state.posts[key]} id={key} />;
      const post = this.state.posts[key];
      this.setState({ posts: { post } });
    };
    if (this.state.posts) {
      const keys = Object.keys(this.state.posts);
      posts = keys.map((key) => (
        <Post
          click={(changKey) => changePost(changKey)}
          key={key}
          obj={this.state.posts[key]}
          id={key}
        />
      ));
    }

    return <div className={s.posts}>{posts}</div>;
  }
}

export default Posts;
