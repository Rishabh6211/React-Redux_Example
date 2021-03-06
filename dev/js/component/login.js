import React,{Component,propTypes} from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import {Login} from '../action/index'
import { connect } from 'react-redux';
require('../../scss/style.scss');

const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="container">
    <label >{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)
const submit = values=>{
    console.log("hello",values);
  }

class  LoginForm extends Component {

  constructor(props){
    super()
  }


  onSubmit(event){
    let prop = {
      username : event.username,
      email: event.email,
      password: event.password
    }
    this.props.Login(prop)
  }
  loader: true
  render(){
    const { fields:{username,email,password}, handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form className="row card form-group col-md-4 col-md-offset-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="username"
          className="form-control" 
          type="text"
          component={renderField}
          label="Username"
          validate={[required, maxLength15, minLength2]}
          warn={alphaNumeric}
          {...username}
        />
        <Field
          name="email"
          className="form-control" 
          type="email"
          component={renderField}
          label="Email"
          validate={email}
          warn={aol}
          {...email}
        />
        <Field
          name="password"
          className="form-control" 
          type="password"
          component={renderField}
          label="Password"
          validate={required}
          {...password}
        />
        <div>
          <button type="submit" className="btn btn-primary" disabled={submitting }   >
            <Link to='/index'>Submit</Link>
          </button>
          <button type="button" className="btn btn-success" >
            <Link to='/signup'>Signup</Link>
          </button>
        </div>
      </form>
    )
  }
}

/*export default reduxForm({
  form: 'fieldLevelValidation' 
})(LoginForm)*/

LoginForm = reduxForm({
  form: 'LoginForm',
  fields:['username','email','password']
  })(LoginForm);

export default connect(null, {Login})(LoginForm)