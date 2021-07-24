import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Container from '../components/Container';
import ContactList from '../Components/ContactList/ContactList';
// import ContactEditor from '../Components/ContactEditor';
import Filter from '../Components/Filter/Filter';
// import Stats from '../Components/Stats';
// import Modal from '../Components/Modal';
// import IconButton from '../Components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';

import { operations, selectors } from '../redux/contacts';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class ContactsView extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <div style={barStyles}>
          <Filter />
        </div>

        <ContactList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTodos: selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(operations.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
