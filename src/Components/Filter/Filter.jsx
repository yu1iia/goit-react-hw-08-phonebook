import React from 'react';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBookActions/phoneBookActions';
import phoneBookSelectors from '../../redux/phoneBookActions/phoneBookSelectors';

import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <>
    <label className={styles.filter_label}>
      <p>Find contacts by name</p>
      <input
        className={styles.filter_input}
        type="text"
        name="filter"
        value={value}
        onChange={e => {
          // console.log(e.target.value);
          onChangeFilter(e.target.value);
        }}
      />
    </label>
  </>
);

const mapStateToProps = state => ({
  value: phoneBookSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: phoneBookActions.filter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
