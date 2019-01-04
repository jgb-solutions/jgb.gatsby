import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const title = "Services";
const IndexPage = () => (
  <Layout title={title}>
    <SEO title={title} keywords={['gatsby', 'application', 'react']} />
    <h1>Welcome</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
