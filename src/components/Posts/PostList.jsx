export const PostList = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <div className="post-header">
        <h3>{post.title}</h3>
      </div>
      <div className="post-topic">Topic: {post.topic.name}</div>
      <div className="post-likes"># of likes: {post.likes.length}</div>
    </div>
  );
};
