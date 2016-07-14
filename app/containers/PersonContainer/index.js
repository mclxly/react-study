/*
 *
 * PersonContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectPersonContainer from './selectors';
import styles from './styles.scss';

export class PersonContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.personContainer }>
      This is PersonContainer container !
      </div>
    );
  }
}

const mapStateToProps = selectPersonContainer();

function mapDispatchToProps(dispatch) {
  return {    
    // onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    // changeRoute: (url) => dispatch(push(url)),
    onClickFeed: (evt) => {
      evt.preventDefault();
      // dispatch({ type: 'giveTreat', id });
    },

    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);
