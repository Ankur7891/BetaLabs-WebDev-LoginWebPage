import React from 'react';
import styles from './LoginPage.module.css';
import LoginImg from '../../Components/LoginImg/LoginImg';
import LoginCreds from '../../Components/LoginCreds/LoginCreds';

const LoginPage = () => {
  return (
    <div className={styles.Container}>
      <LoginImg />
      <LoginCreds />
    </div>
  )
}

export default LoginPage;
