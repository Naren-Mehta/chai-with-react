import { usePostContext } from "../context/PostContext";

const PostList = () => {
  const { postTitles } = usePostContext();

  return (
    <div data-testid="post-titles">
      {postTitles.map((title, index) => (
        <p key={index}>{title}</p>
      ))}
    </div>
  );
};

export default PostList;
