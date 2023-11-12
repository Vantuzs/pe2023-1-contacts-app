import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';
import postsReducer from './slices/postsSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
    postsList: postsReducer,
    usersList: usersReducer,
  },
});

export default store;

// {
//   contactsList: {
//     contacts: [
//       {
//         id: uuidv4(),
//         fullName: 'Test',
//         phoneNumber: '+380987654321',
//       },
//       {
//         id: uuidv4(),
//         fullName: 'Ivo',
//         phoneNumber: '+380987654322',
//       },
//     ],
//   },
//   postsList: {
//     posts: [],
//     isFetching: false,
//     error: null,
//   },
//   usersList: {
//     users: [],
//     isFetching: false,
//     error: null,
//   }
// }
