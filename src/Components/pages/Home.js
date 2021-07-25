import React from 'react';
import { connect } from 'react-redux';
import styles from '../App.module.css';

const HomePage = ({ token }) => (
  <>
    {!token && (
      <div>
        <h1 className={styles.welcomeTitle}>YOUR PERSONAL PHONEBOOK</h1>
      </div>
    )}
  </>
);

const mapStateToProps = state => {
  // console.log(state.auth.token);
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(HomePage);
