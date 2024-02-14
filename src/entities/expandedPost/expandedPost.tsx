import React, { FC } from "react";
import { Post } from "../../app/types/types";
import style from "./expandedPost.module.css";
import { Link } from "react-router-dom";

const ExpandedPost: FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={style.postContainer}>
      <span>{post.id}</span>
      <span>{post.title}</span>
      <span>{post.body}</span>
      <div className={style.backButton}>
        <Link to={"/"}>Назад</Link>
      </div>
    </div>
  );
};

export default ExpandedPost;
