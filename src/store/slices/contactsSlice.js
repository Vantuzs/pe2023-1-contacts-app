import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      isFavourite: true,
      fullName: 'Test',
      phoneNumber: '+380987654321',
    },
    {
      id: uuidv4(),
      isFavourite: false,
      fullName: 'Ivo',
      phoneNumber: '+380987654322',
    },
  ],
};

const contactsSlice = createSlice({
  initialState,
  name: 'contacts',
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push({
        ...payload,
        isFavourite: false,
        id: uuidv4(),
      });
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(c => c.id !== payload);
    },
    // id, udpationData
    updateContact: (state, { payload: { id, data } }) => {
      const updatedContactIndex = state.contacts.findIndex(c => c.id === id);
      state.contacts[updatedContactIndex] = {
        ...state.contacts[updatedContactIndex],
        ...data,
      };
    },
  },
});

const { reducer, actions } = contactsSlice;

export const { deleteContact, updateContact, createContact } = actions;

export default reducer;
