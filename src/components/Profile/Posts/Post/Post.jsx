import * as React from "react";
import styles from "./Post.module.css";

export class Post extends React.Component {
  state = {
    redraw: true,
  };

  constructor(props) {
    super(props);
    this.state.likesCount = props.likesCount;
    this.state.message = props.message;
    this.like = props.like;
    this.toggleLike = props.doToggleLike;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.redraw === false) return false;

    this.setState({
      redraw: false,
    });
    return true;
  }

  addLike() {
    this.toggleLike();
    this.setState((prevState) => {
      let newLikes = prevState.likesCount + (prevState.like === true ? -1 : 1);
      return {
        like: !prevState.like,
        likesCount: newLikes,
        redraw: true,
      };
    });
  }

  render() {
    return (
      <div className={styles.message}>
        <div className={styles.container}>
          <div className={styles.ava}></div>
          {this.state.message}
        </div>

        <div className={styles.flex}>
          {this.state.likesCount}
          <div
            className={styles.like}
            onClick={() => {
              this.addLike();
            }}
          >
            {this.state.like === true ? "Liked" : "Like"}
          </div>
          <div className={styles.reply}>Reply</div>
        </div>
      </div>
    );
  }
}
