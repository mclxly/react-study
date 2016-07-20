/**
*
* AddTodoForm
*
*/

import React from 'react';

import styles from './styles.css';

function AddTodoForm(props) {
  let { onSubmit } = props;
  let input

  return (
    <div className={ styles.addTodoForm }>
      <form className="form-inline" onSubmit={ e => {e.preventDefault(); onSubmit(input.value)}}>
        <input className="form-control" ref={node => {input = node}} />
        <button className="btn btn-primary" type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
