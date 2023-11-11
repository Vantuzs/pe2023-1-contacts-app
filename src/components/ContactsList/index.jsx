import { connect } from 'react-redux';
import { deleteContact, updateContact } from '../../store/slices/contactsSlice';

function ContactsList ({ contacts, deleteContactById, updateContactById }) {
  const changeIsFavourite = (id, checked) =>
    updateContactById(id, { isFavourite: checked });

  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          <label>
            <input
              type='checkbox'
              checked={c.isFavourite}
              onChange={({ target: { checked } }) =>
                changeIsFavourite(c.id, checked)
              }
            />{' '}
            {JSON.stringify(c)}
          </label>

          <button onClick={() => deleteContactById(c.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ contactsList }) => contactsList;

const mapDispatchToProps = dispatch => ({
  deleteContactById: id => dispatch(deleteContact(id)),
  updateContactById: (id, data) => dispatch(updateContact({ id, data })),
});

// deleteContact(id) ===>
//     action = {
//        type: 'deleteContact',
//        payload: id
//     }
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
