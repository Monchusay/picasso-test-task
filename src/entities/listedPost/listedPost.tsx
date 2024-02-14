import React, { FC } from "react";
import { Post } from "../../app/types/types";
import style from "./listedPost.module.css";
import { Link } from "react-router-dom";

const ListedPost: FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={style.postContainer}>
      <span>{post.id}</span>
      <span>{post.title}</span>
      <span>{post.body}</span>
      <div className={style.toPostButton}>
        <Link to={`/post/${post.id}`}>Подробнее</Link>
      </div>
    </div>
  );
};

export default ListedPost;
