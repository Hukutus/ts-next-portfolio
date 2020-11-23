import React, { FC } from "react";
import Head from "next/head";

export type MetaProps = {
  title: string;
  description: string;
  canonical: string;
  image: string;

  styleSheets: string[];
  scripts: string[];
};

const Meta: FC<Readonly<MetaProps>> = ({
  title,
  description,
  canonical,
  image,
  styleSheets,
  scripts,
}: Readonly<MetaProps>): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <link rel="icon" type="image/png" href="/public/favicon.png" />
    <link rel="apple-touch-icon" href="/public/favicon.png" />

    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:site_name" content="" />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={image} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    {/* <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" /> */}

    {styleSheets.map((url) => (
      <link rel="stylesheet" href={url} key={url} />
    ))}

    {scripts.map((url) => (
      <script type="text/javascript" src={url} key={url} />
    ))}
  </Head>
);

export default Meta;
