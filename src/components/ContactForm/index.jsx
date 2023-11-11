import { ErrorMessage, Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { CONTACT_VALIDATION_SCHEMA } from '../../utils/validationSchemas';
import { createContact } from '../../store/slices/contactsSlice';

function ContactForm ({ createNewContact }) {
  const initialValues = { fullName: '', phoneNumber: '' };

  const submitHandler = (values, { resetForm }) => {
    createNewContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          Name:{' '}
          <Field
            name='fullName'
            type='text'
            placeholder='Contact Name'
            autoFocus
          />
          <ErrorMessage name='fullName' component='div' />
        </label>
        <br />
        <label>
          Phone:{' '}
          <Field
            name='phoneNumber'
            type='text'
            maxLength='13'
            placeholder='+XXXXXXXXXXXX'
          />
          <ErrorMessage name='phoneNumber' component='div' />
        </label>
        <br />
        <button type='submit'>Add</button>
        <br />
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewContact: data => dispatch(createContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
