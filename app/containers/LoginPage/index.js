/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import HtmlToReact from 'html-to-react';

import LoginForm from 'components/LoginForm';
import selectLoginPage from './selectors';
import styles from './styles.css';
import SyncValidationForm from './SyncValidationForm';
import { SubmissionError } from 'redux-form/immutable'

const showResults = values =>
  new Promise((resolve,reject) => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      reject(new SubmissionError({ username: '用户名不存在', _error: '登录失败!' }));
      //  throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
      // resolve()
    }, 500)
  })//.catch(err => console.log(err))

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let htmlInput = '<div>\
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">\
      Login\
    </button>\
\
    <!-- Modal -->\
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
      <div class="modal-dialog" role="document">\
        <div class="modal-content">\
          <div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
            <h4 class="modal-title" id="myModalLabel">Modal title</h4>\
          </div>\
          <div class="modal-body">\
            ...\
          </div>\
          <div class="modal-footer">\
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
            <button type="button" class="btn btn-primary">Save changes</button>\
          </div>\
        </div>\
      </div>\
    </div>\
    </div>';
    let htmlToReactParser = new HtmlToReact.Parser(React);
    let reactComponent = htmlToReactParser.parse(htmlInput);
    // let reactHtml = React.renderToStaticMarkup(reactComponent);

    // assert.equal(reactHtml, htmlInput); // true

    return (
      <div className={ styles.loginPage }>

        <SyncValidationForm onSubmit={showResults}/>
      </div>
    );
  }
}

const mapStateToProps = selectLoginPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
