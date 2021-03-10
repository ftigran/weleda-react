import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextField as TextField } from '../TextField/renderTextField'
import {required, phoneNumber, promoNumber, email, maxLength, minLength, kirilicName, instaUser} from '../TextField/validation'
import { Grid } from '@material-ui/core';
import './regForm.scss'
const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className='regForm'>
      <Grid container justify='space-between'>
        <Grid item xs={6} className='FormTextFieldContainer'>
          <Field
              name="firstName"
              component={TextField}
              type="text"
              label="Имя"
              validate={[required, maxLength(20, 'Имя должно'), minLength(2, 'Имя должно'), kirilicName]}

            />
            <Field
              name="lastName"
              component={TextField}
              type="text"
              label="Фамилия"
              validate={[required, maxLength(20, 'Фамилия должна'), minLength(2, 'Фамилия должна'), kirilicName]}

            />
            <Field
              name="instagram"
              component={TextField}
              type="text"
              label="@instagram"
              validate={[required, instaUser]}
            />
        </Grid>
        <Grid item xs={6} className='FormTextFieldContainer'>
          <Field
              name="phone"
              component={TextField}
              type="tel"
              label="Телефон"
              validate={[required, phoneNumber]}
            />

            <Field
              name="email"
              component={TextField}
              type="email"
              label="Email"
              validate={[required, email]}
            />
            <Field
              name="promocode"
              component={TextField}
              type="text"
              label="Промокод с листовки"
              validate={[required, promoNumber]}
            />
        </Grid>
      </Grid>
      <div>
        <button type="submit" >Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
