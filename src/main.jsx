import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App1.jsx'
import store from './services/store.js'
import { Provider } from 'react-redux'
console.log('store is ' ,store);
// store.subscribe(()=>console.log('store state is ',store.getState()));
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider  store={store}>
   {console.log('strore is',store)}
    <App1 />
    </Provider>
  </React.StrictMode>,
)
