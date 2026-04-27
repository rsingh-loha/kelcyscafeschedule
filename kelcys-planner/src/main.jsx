import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
window.storage = {
  async get(key) { const v=localStorage.getItem(key); if(v===null) throw new Error('not found'); return {key,value:v}; },
  async set(key,value) { try{localStorage.setItem(key,value);return{key,value};}catch(e){return null;} },
  async delete(key) { localStorage.removeItem(key); return{key,deleted:true}; },
  async list(prefix) { return{keys:Object.keys(localStorage).filter(k=>!prefix||k.startsWith(prefix))}; }
}
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
