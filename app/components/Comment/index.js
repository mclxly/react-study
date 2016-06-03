/**
*
* Comment
*
*/

import React from 'react';
import marked from 'marked';

import styles from './styles.css';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }
  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div className={ styles.comment }>
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

export default Comment;
