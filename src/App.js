import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import './App.scss';

function App() {
  return (
    <Layout>
      <BurgerBuilder/>
    </Layout>
  );
}

export default App;
