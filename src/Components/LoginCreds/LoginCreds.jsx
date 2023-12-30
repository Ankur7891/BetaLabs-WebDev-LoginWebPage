import React from 'react';
import styles from './LoginCreds.module.css';
import logo from '../../Assets/Images/logo.svg';
import google from '../../Assets/Images/google.svg';
import { Link } from 'react-router-dom';
import TextBox from '../../Components/TextBox/TextBox';
import Button from '../../Components/Button/Button';

function LoginCreds() {
  const google_url = 'https://www.google.com';
  const rem = "RemMe?";
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Creds}>
        <div className={styles.LogoDiv}>
          <img
            className={styles.Logo}
            src={logo}
            alt="Logo Not Found"
            title="Logo"
          />
        </div>
        <div className={styles.TitleDiv}>
          <h3 className={styles.Title}> Login to your Account </h3>
        </div>
        <div className={styles.TextDiv}>
          <p className={styles.Text}>See what is going on with your business</p>
        </div>
        <div className={styles.GoogleDiv}>
          <Link className={styles.GoogleLink} to={google_url}>
            <div className={styles.GoogleBtn}>
              <img
                className={styles.GoogleLogo}
                src={google}
                alt="Google Not Found"
              />
              <div className={styles.GoogleText}>
                &nbsp; Continue with Google
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.AltSIText}>
          ----------&nbsp;
          <Link className={styles.AltSILink} to="/">
            or Sign in with Email
          </Link>
          &nbsp;----------
        </div>
        <div className={styles.Inputs}>
          <form id="login" action="#" method="post">
            <TextBox name="Email" type="text" placeholder="mail@abc.com" isRequired="true" />
            <TextBox
              name="Password"
              type="password"
              placeholder="*****************"
              isRequired="true"
            />
            <div className={styles.ExtrasContainer}>
              <div className={styles.ExtrasLHS}>
                <input
                  name={rem}
                  className={styles.RememberMe}
                  type="checkbox"
                  defaultChecked={true}
                />
                <label htmlFor={rem}>&nbsp;Remember Me </label>
              </div>
              <div className={styles.ExtrasRHS}>
                <Link className={styles.ForgotPassword} to="/">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <Button name="Login" color="#7F265B" linkurl="/" />
          </form>
        </div>
        <div className={styles.CreateAccount}>
          Not Registered Yet? &nbsp;
          <Link className={styles.CreateAccountLink} to="/">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginCreds;
