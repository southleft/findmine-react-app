import React from 'react';
import Layout from '../components/Layout';
import {ConnectedProductRow} from '../components/Products/ProductRow';

const Mobile = () => {
  return (
    <Layout layout='mobile'>
      <ConnectedProductRow />
    </Layout>
  );
};

export default Mobile;
