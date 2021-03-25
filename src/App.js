import React from 'react';
import ProductList from './components/ProductList';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <>
        <h1>Product Hub</h1>
        <ProductList />
      </>
    )
  }
}

export default App;
