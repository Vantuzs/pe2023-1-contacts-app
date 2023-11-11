import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      fullName: 'Test',
      phoneNumber: '+380987654321',
    },
    {
      id: uuidv4(),
      fullName: 'Ivo',
      phoneNumber: '+380987654322',
    },
  ],
};

const contactsSlice = createSlice({
  initialState,
  name: 'contacts',
  reducers: {
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(c => c.id !== payload);
    },
  },
});

const { reducer, actions } = contactsSlice;

export const { deleteContact } = actions;

export default reducer;
