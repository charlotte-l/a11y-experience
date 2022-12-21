import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import settings from '../settings';

type SEOProps = {
  title: string;
  description: string;
  siteName: string;
  canonical: string;
  image: string;
  twitterHandle: string;
};

const SEO = (props: SEOProps) => {
  const {
    title, description, siteName, canonical, image, twitterHandle,
  } = props;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title key="title">{`${title} - ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_image" property="og:image" content={image} />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | ${siteName}`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />
      <link rel="canonical" href={canonical} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="robots" content="index,follow" />
    </Head>
  );
};

SEO.defaultProps = {
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.meta.description,
  siteName: settings?.meta?.siteName,
  canonical: settings?.meta?.rootUrl,
  image: settings?.meta?.social?.graphic,
  twitterHandle: settings?.meta?.social?.twitter,
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  siteName: PropTypes.string,
  canonical: PropTypes.string,
  image: PropTypes.string,
  twitterHandle: PropTypes.string,
};

export default SEO;
