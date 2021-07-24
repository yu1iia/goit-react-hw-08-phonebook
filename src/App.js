import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import AppBar from './Components/AppBar';
import ContactsView from './views/ContactsView';
// import Container from './components/Container';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

// import ContactForm from './Components/ContactForm/ContactForm';
// import Filter from './Components/Filter/Filter';
// import ContactList from './Components/ContactList/ContactList';

import './App.css';
// import { render } from '@testing-library/react';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="contacrs" component={ContactsView} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

// const App = () => {
//   return (
//     <div className="container">
//       <h1 className="phonebookHeader">Phonebook</h1>
//       <ContactForm />

//       <h2 className="contactsHeader">Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };
// export default App;
