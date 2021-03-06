<img src="https://raw.githubusercontent.com/mxstbr/react-boilerplate-brand/master/assets/banner-metal.jpg" alt="react boilerplate banner" align="center" />

<br />

<div align="center"><strong>Start your next react project in seconds</strong></div>

## Features

<dl>
  <dt>UI Enhance</dt>
  <dd>Bootstrap 3</dd>

  <dt>API test</dt>
  <dd>json-server -p 8081 -H 0.0.0.0 --watch server/faked_db.json</dd>

  <dt>process.env.PORT</dt>
  <dd>export PORT=1234</dd>

  <dt>Adds the given favicon path to the output html.</dt>
  <dd>https://github.com/ampedandwired/html-webpack-plugin#configuration</dd>
  
</dl>

## Problems

<dl>
  <dt>Error: module.exports = require('./configureStore.prod')</dt>
  <dd>module.exports = require('./configureStore.prod').default; <a href="http://stackoverflow.com/questions/33505992/babel-6-changes-how-it-exports-default">Babel 6 changes how it exports default</a></dd>

  <dt>PostCSS 与 Sass 混用问题</dt>
  <dd>PostCSS 原生解决方案更适合 React</dd>
</dl>

But wait... there's more!

  - *The best test setup:* Automatically guarantee code quality and non-breaking
    changes. (Seen a react app with 99% test coverage before?)
  - *Native web app:* Your app's new home? The homescreen of your users' phones.
  - *The fastest fonts:* Say goodbye to vacant text.
  - *Stay fast*: Profile your app's performance from the comfort of your command
    line!
  - *Catch problems:* AppVeyor and TravisCI setups included by default, so your
    tests get run automatically on Windows and Unix.

<sub><i>Keywords: React.js, Redux, Hot Reloading, ESNext, Babel, PostCSS, Autoprefixer, react-router, Offline First, ServiceWorker, CSS Modules, redux-saga, FontFaceObserver, PageSpeed Insights</i></sub>

## Quick start

1. Clone this repo using `$ git clone --depth=1 https://github.com/mxstbr/react-boilerplate.git`
1. Run `$ npm run setup` to install dependencies and clean the git repo.<br />
   *At this point you can run `$ npm start` to see the example app at `http://localhost:3000`.*
1. Run `$ npm run clean` to delete the example app.

Now you're ready to rumble!

## 依赖库

- [chalk](https://github.com/chalk/chalk): 控制台字符串添加色彩
- [history](https://github.com/mjackson/history): Manage browser history with JavaScript
- [immutable](https://github.com/facebook/immutable-js): Immutable Data Collections
- [marked](https://github.com/chjj/marked): A markdown parser built for speed
- [redux](https://github.com/reactjs/redux): Redux is a predictable state container for JavaScript apps.
- [react-redux](https://www.npmjs.com/package/react-redux): Official React bindings for Redux. A view binding library.
- [redux-immutable](https://github.com/gajus/redux-immutable): redux-immutable is used to create an equivalent function of Redux combineReducers that works with Immutable.js state.
- [redux-saga](https://github.com/yelouafi/redux-saga): Saga middleware for Redux to handle Side Effects.
 - [reselect](https://github.com/reactjs/reselect): Selectors for Redux.
 - [sanitize.css](https://github.com/10up/sanitize.css): Render elements consistently. Follow best practices.
 - [whatwg-fetch](https://github.com/github/fetch): A window.fetch polyfill.