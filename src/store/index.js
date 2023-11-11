import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';

const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
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
//   };
// }
