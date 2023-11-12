import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPostsThunk } from '../../store/slices/postsSlice';

function PostsList ({ posts, isFetching, error, getPosts }) {
  useEffect(() => {
    getPosts();
  }, []);

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

const mapDispathToProps = dispatch => ({
  getPosts: () => dispatch(getPostsThunk()),
});

export default connect(mapStateToProps, mapDispathToProps)(PostsList);
