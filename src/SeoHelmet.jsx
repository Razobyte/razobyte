import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHelemt = ({ title, description, keywords, canonicalUrl }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={canonicalUrl} />
  </Helmet>
);

export default SEOHelemt;