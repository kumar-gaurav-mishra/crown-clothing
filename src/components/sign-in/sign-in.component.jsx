import React from 'react';
import FormInput from '../form-input/font-input.component';
import firebase from 'firebase/app';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>Sign In with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
          <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required />
          <div className="button">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
