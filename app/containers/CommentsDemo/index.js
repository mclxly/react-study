/*
 *
 * CommentsDemo
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectCommentsDemo from './selectors';
import styles from './styles.css';

import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';

import $ from 'jquery';

export class CommentsDemo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  loadCommentsFromServer() {
    let that = this;
    $.ajax({
      url: that.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        that.setState({data: data});
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.url, status, err.toString());
      }.bind(that)
    });
  }
  handleCommentSubmit(comment) {
    $.ajax({
      url: this.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        // this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.url, status, err.toString());
      }.bind(this)
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }  
  componentWillMount() {
    console.log('comments loading...');
    this.cmdata = [
      {id: 1, author: "Pete Hunt", text: "哈哈"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    ];
    //this.url = "http://192.168.21.90:4000/comments";
    this.url = "http://192.168.1.52:8081/comments";
  }
  componentDidMount() {
    // let self = this;
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), 2000);
  }
  render() {
    return (
      <div className={ styles.commentsDemo }>
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
      </div>
    );
  }  
}

const mapStateToProps = selectCommentsDemo();

CommentsDemo.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    // dispatch,
    changeRoute: (url) => dispatch(push(url)),
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(CommentsDemo);
export default connect(null, mapDispatchToProps)(CommentsDemo);