import React from 'react';
import { Header }from './header.js'
import './App.css';
import { TransactionProvider } from './transContext.js';
function App() {
  return (

    <TransactionProvider>
       <Header />
    </TransactionProvider>
    );
}

export default App;
