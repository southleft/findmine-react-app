import React from 'react';
import Layout from '../components/Layout';
import {ConnectedProductRow} from '../components/Products/ProductRow';

const Desktop = () => {
  return (
    <Layout layout='desktop'>
      <ConnectedProductRow />
    </Layout>
  );
};

export default Desktop;
