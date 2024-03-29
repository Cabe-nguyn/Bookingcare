import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import * as actions from '../../store/actions';

import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isShowPassword: false,
    };
  }
  handleOnChangeUsername = event => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangePassword = event => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = () => {
    console.log(`username: ${this.state.username}`);
    console.log(`password: ${this.state.password}`);
  };
  handleShowpassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={event => this.handleOnChangeUsername(event)}
              ></input>
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>
              <input
                className="form-control"
                type={this.state.isShowPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={this.state.password}
                onChange={event => this.handleOnChangePassword(event)}
              />
              <span
                onClick={() => {
                  this.handleShowpassword();
                }}
              >
                <i
                  className={
                    this.state.isShowPassword
                      ? 'fas fa-eye'
                      : 'fas fa-eye-slash'
                  }
                ></i>
              </span>
            </div>
            <div className="col-12 ">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forot your password?</span>
            </div>
            <div className="col-12 text-center">
              <span className="text-other-login mt-3">Or Login With</span>
            </div>
            <div className="col-12 social-login ">
              <i className="fab fa-google google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navigate: path => dispatch(push(path)),
    adminLoginSuccess: adminInfo =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
