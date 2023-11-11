import { connect } from 'react-redux'
import { deleteContact } from '../../store/slices/contactsSlice'

function ContactsList ({ contacts, deleteContactById }) {
  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          {JSON.stringify(c)}
          <button onClick={() => deleteContactById(c.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ contactsList }) => contactsList

const mapDispatchToProps = dispatch => ({
  deleteContactById: id => dispatch(deleteContact(id))
})

// deleteContact(id) ===>
//     action = {
//        type: 'deleteContact',
//        payload: id
//     }
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)
