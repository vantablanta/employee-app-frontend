import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'devextreme/dist/css/dx.softblue.css';
import 'devextreme/dist/css/dx.common.css';


import './vendor/bootstrap/css/bootstrap.min.css'
import './assets/css/templatemo-chain-app-dev.css'
import './assets/css/animated.css'
import './assets/css/owl.css'


// import './vendor/jquery/jquery.min.js'
// import './vendor/bootstrap/js/bootstrap.bundle.min.js'
// import './assets/js/owl-carousel.js'
// import './assets/js/animation.js'
// import './assets/js/imagesloaded.js'
// import './assets/js/popup.js'
// import './assets/js/custom.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
