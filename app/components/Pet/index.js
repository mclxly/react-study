/**
*
* Pet
*
*/

import React from 'react';

import styles from './styles.css';

class Pet extends React.Component {
  constructor(props) {
     super(props);
     this.shouldComponentUpdate = isDiff.bind(this);
  }

  render() {
    const { id, name, treats } = this.props.pet;
    console.log('Rendering Pet:' + name); 
    
    return (
      <a 
        onClick={onClick}
        className="list-group-item pet-link"
      >
        <span className="pet-icon">🐶</span>
        {name}
        <span className="treat pull-right">
          <span className="treat-icon">🍪</span> x {treats}
        </span>
      </a>
    );
  }
}

export default Pet;
