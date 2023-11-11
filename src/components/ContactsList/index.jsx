import { connect } from 'react-redux'

function ContactsList ({ contacts }) {
  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>{JSON.stringify(c)}</li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ contactsList }) => contactsList

export default connect(mapStateToProps)(ContactsList)
