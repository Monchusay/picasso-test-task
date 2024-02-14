import React, { useState } from "react";
import { useGetPostsQuery } from "../../app/postsApi/postsApi";
import ReusablePreloader from "../../shared/reusablePreloader/reusablePreloader";
import ListedPost from "../../entities/listedPost/listedPost";

const PageMain = () => {
  const [offset, setOffset] = useState<number>(0);

  const { data: postsArray, isLoading } = useGetPostsQuery(offset);

  React.useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && postsArray) {
        setOffset(postsArray.length);
      }
    };
    document.addEventListener("scroll", onScroll);
    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [postsArray]);

  if (isLoading) {
    return <ReusablePreloader />;
  }

  if (postsArray) {
    return (
      <>
        {postsArray.map((post) => (
          <ListedPost post={post} key={post.id} />
        ))}
      </>
    );
  }

  return <>Ошибка загрузки</>;
};

export default PageMain;
