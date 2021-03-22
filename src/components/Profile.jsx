import * as React from "react";
import forest from "../content/forest.jpg";

export const Profile = () => (
  <div className="content">
    <div>
      <img src={forest} alt={"forest"} />
    </div>
    <div>ava+description</div>
    <div>
      My posts
      <div>New post</div>
      <div>
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
  </div>
);