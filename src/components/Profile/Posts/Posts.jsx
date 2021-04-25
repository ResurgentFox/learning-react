import * as React from "react";
import styles from "./Posts.module.css";
import emoji from "./emoji/emoji.png";
import { Post } from "./Post/Post";

export class Posts extends React.Component {
  state = {
    postsChanged: true,
  };

  constructor(props) {
    super(props);
    this.state.posts = this.props.posts;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.postsChanged === false) return false;

    this.setState({
      postsChanged: false,
    });
    return true;
  }

  addPost(val) {
    this.state.posts.addPost(val);
    this.setState((prevState) => {
      return {
        postsChanged: true,
      };
    });
  }

  render() {
    const newElementRef = React.createRef();
    const postsElements = this.state.posts.data.map((post) => (
      <Post
        id={post.id}
        reply={post.reply}
        message={post.message}
        likesCount={post.likesCount}
      />
    ));

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.title}>What`s new?</div>
          <div className={styles.post}>
            <div className={styles.avatar}></div>
            <textarea
              ref={newElementRef}
              method={"POST"}
              cols={40}
              rows={1}
              className={styles.text}
            />
            <button
              onClick={() => {
                this.addPost(newElementRef.current.value);
                newElementRef.current.value = "";
              }}  
              className={styles.button}
            >
              SEND
            </button>
          </div>
        </div>

        <div className={styles.flex}>
          <img className={styles.emoji} alt={"emoji"} src={emoji}></img>
        </div>

        <div className={styles.posts}>{postsElements}</div>
      </div>
    );
  }
}
