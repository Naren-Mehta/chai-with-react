import Comments from "./Comments";

const CommentBox = ({ username, comment, replies }) => {
  return (
    <div className="border border-black m-2 p-2">
      <div className="flex gap-1 items-center">
        <img
          className="w-10"
          src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
          alt="image"
        />

        <h4 className="font-bold">{username}</h4>
      </div>

      <p className="m-1">{comment}</p>
      {/* {replies.length} */}
      {Array.isArray(replies) && replies.length > 0 && (
        <Comments comments={replies} />
      )}
    </div>
  );
};

export default CommentBox;
