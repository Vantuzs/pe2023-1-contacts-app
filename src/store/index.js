import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';
import postsReducer from './slices/postsSlice';

const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
    postsList: postsReducer,
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
//   }
// }
