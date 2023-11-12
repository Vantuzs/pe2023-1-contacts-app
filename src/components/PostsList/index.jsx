import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPostsThunk } from '../../store/slices/postsSlice';
import { getUsersThunk } from '../../store/slices/usersSlice';

function PostsList ({ posts, isFetching, error, getPosts, getUsers, users }) {
  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  const mapPosts = p => (
    <li key={p.id}>
      <h3>{p.title}</h3>
      {!!users.length && (
        <span>{users.find(u => u.id === p.userId).username}</span>
      )}
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

// const mapStateToProps = (state) => {return {}}
const mapStateToProps = ({ postsList, usersList: { users } }) => ({
  ...postsList,
  users,
});
// {
//     posts: [],
//     isFetching: false,
//     error: null,
//     users:[]
// }
const mapDispathToProps = dispatch => ({
  getPosts: () => dispatch(getPostsThunk()),
  getUsers: () => dispatch(getUsersThunk()),
});

export default connect(mapStateToProps, mapDispathToProps)(PostsList);
