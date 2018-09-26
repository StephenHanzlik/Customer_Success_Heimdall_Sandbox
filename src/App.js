import React, { Component } from 'react';
import ceLogo from './ce-logo.png';
import hLogo from './heimdall-icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ceLogo} className="App-logo" alt="logo" />
          <img src={hLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Customer Success Heimdall Sandbox Application</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

//Calebs example HTML to Embed secure method #2.  Employ this in example app.
// <html>
//
// <head>
//     <title>Simulate Send Token</title>
//     <meta http-equiv="Cache-Control" content="no-store" />
//
//
//     <script src="javascripts/jquery.min.js" type="text/javascript"></script>
//     <!-- <script src="javascripts/send-token.js" type="text/javascript"></script> -->
//     <script src="https://heimdall.stgc0.uswest2.c-e.works/v1/public/javascripts/heimdall-sdk-staging.js" type="text/javascript"></script>
// </head>
//
// <body>
//     <script>
//         const callback = function (instance) {
//             document.getElementById('payload').innerHTML = ""
//             console.log(instance)
//             document.getElementById('payload').innerHTML = JSON.stringify(instance, null, 2)
//         }
//         let urlParams = new URLSearchParams(window.location.search);
//         let token = urlParams.get('token');
//         const create = () => {
//             CE.createInstance({ token }, callback)
//         }
//     </script> Simulate Launch Connector
//     <br>
//     <br>
//     <button id="connect" onclick="create()">Connect to Anything</button>
//     <div id="payload">
//
//     </div>
// </body>
//
// </html>
