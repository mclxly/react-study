/**
*
* CommentForm
*
*/

import React from 'react';

import styles from './styles.css';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '', 
      text: ''
    };
  }
  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }
  handleTextChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    this.setState({author: '', text: ''});
  },
  render() {
    return (
      <form className="commentForm"  onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default CommentForm;
