import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetSinglePostQuery } from "../../app/postsApi/postsApi";
import ReusablePreloader from "../../shared/reusablePreloader/reusablePreloader";
import ExpandedPost from "../../entities/expandedPost/expandedPost";

const PagePost: FC = () => {

  const { postId } = useParams<{ postId: string }>();

  const { data: Post, isLoading } = useGetSinglePostQuery(postId as string);

  
  if (isLoading) {
    return <ReusablePreloader />;
  }

  if (Post) {
    return <ExpandedPost post={Post} />;
  }

  return <>Ошибка загрузки поста</>;
};

export default PagePost;
