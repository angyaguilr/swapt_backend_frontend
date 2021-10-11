import Head from 'next/head';
import React from 'react';

interface MetadataHeadProps {
  title: string;
  description: string;
  author: string;
}

export default function MetadataHead(props: MetadataHeadProps) {
  const { title, description, author } = props;

  return (
    <Head>
      <title>{title} | bstefanski.com</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
    </Head>
  );
}