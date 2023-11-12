import { connect } from 'react-redux';

function PostsList ({ posts, isFetching, error }) {
  const mapPosts = p => (
    <li key={p.id}>
      <h3>{p.title}</h3>
      <p>{p.body}</p>
    </li>
  );

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!ERROR!!!</div>}
      {!isFetching && !error && <ul>{posts.map(mapPosts)}</ul>}
    </>
  );
}

const mapStateToProps = ({ postsList }) => postsList;

export default connect(mapStateToProps)(PostsList);
