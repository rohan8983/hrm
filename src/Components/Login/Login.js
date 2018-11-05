import React from "react";
import "./login.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as loginAction from "./actions";
import Snackbar from "@material-ui/core/Snackbar";

const Login = props => {
  return (
    <div>
      <div className="background" />
      <div className="background2" />
      <div className="loginForm">
        <hgroup>
          <h1>Login</h1>
        </hgroup>
        <form>
          <div className="group">
            <input
              type="email"
              className="used"
              onChange={e =>
                props.actions.handleChange("Username", e.target.value)
              }
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Username</label>
          </div>
          <div className="group">
            <input
              type="Password"
              className="used"
              onChange={e =>
                props.actions.handleChange("Password", e.target.value)
              }
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Password</label>
          </div>
          <button
            type="button"
            className="buttonui"
            onClick={e =>
              props.actions.login(props.Username, props.Password, props.history)
            }
          >
            <span> Sign in </span>
            <div className="ripples buttonRipples">
              <span className="ripplesCircle" />
            </div>
          </button>
        </form>
        <div className="powered">
          Powered by <a href="www.sample.com">React</a>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        message="heelo"
        open={props.errorMsg}
        autoHideDuration={6000}
        onClose={e => props.handleClose()}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    Username: state.login.Username,
    Password: state.login.Password,
    errorMsg: state.login.errorMsg
  };
};

const mapDispatchToprops = dispatch => ({
  actions: bindActionCreators(loginAction, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToprops
)(Login);
