import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form/immutable'

import styles from './ItemForm.scss'

class ItemForm extends React.Component {

  handleSubmit = () => {
    const { handleSubmit, reset } = this.props
    handleSubmit()
    reset()
  }

  renderInputField = (field) => {
    return <input {...field} {...field.input} />
  }

  render() {
    return (<form className={styles.form}>
      <h2>Add people to the list</h2>
      <Field
        component={this.renderInputField}
        maxLength={100}
        name="firstName"
        placeholder="First Name"
        type="text"
      />
      <Field
        component={this.renderInputField}
        maxLength={100}
        name="lastName"
        placeholder="Last Name"
        type="text"
      />
      <button type="button" onClick={this.handleSubmit}>Add</button>
    </form>)
  }
}

ItemForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'itemForm',
})(ItemForm)
