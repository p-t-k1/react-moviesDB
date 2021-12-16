import logo from '../logo.svg';
import '../App.css';
import '../styles.css';
import {Link} from "react-router-dom";

function Login() {
  return (
      <div id="bodyBackground">
          <form>
              <div id="loginBox">
                  <img src="https://i.ibb.co/N9G2tKF/logo.png"/>
                  <span id="loginText">Zaloguj się</span>
                  <span id="loginTextSmall">Login</span>
                  <input type="text" name="login" className="loginInput"/>
                  <span id="loginTextSmall">Hasło</span>
                  <input type="password" name="password" className="loginInput"/>
                  <button type="submit" id="loginButton">
                      Zaloguj się
                  </button>
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <div id="registerButton">
                          Nie masz jeszcze konta?
                      </div>
                  </Link>
              </div>
          </form>
      </div>
  );
}

export default Login;
