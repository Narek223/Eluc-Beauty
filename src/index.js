import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import{ store} from "./Redux/Store/store";
import { BrowserRouter ,HashRouter} from 'react-router-dom';
import './i18n.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <HashRouter>
      <App />
    </HashRouter>
 
  </Provider>
);

reportWebVitals();
