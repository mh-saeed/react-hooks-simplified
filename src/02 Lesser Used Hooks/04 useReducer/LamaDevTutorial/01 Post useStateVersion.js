import { useState } from "react";

const PostUseState = () => {
  // USING USE_STATE

  // TODO: if two or more useState are being used in a component we should use useReducer

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [post, setPost] = useState({});

  const handleFetch = () => {
    setLoading(true);
    setError(false);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPost((prev) => (prev = data));
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    // USING USE_STATE

    <div>
      <button onClick={handleFetch}>
        {loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{post?.title}</p>
      <span>{error && "Something went wrong!"}</span>
    </div>
  );
};

export default PostUseState;
