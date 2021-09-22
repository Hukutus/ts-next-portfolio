import { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import Meta from "@/components/Head";
import Layout from "@/layouts/Layout";

const components = {
  a: Link,
};

const App: FC<any> = ({ Component, pageProps }) => (
  <>
    <Meta
      title="Topi Salonen"
      description="I develop stuff for the web. Come check out some of the stuff I've made, like this page."
      canonical="topisalonen.fi"
      image="/topi_500x500.png"
      styleSheets={[
        "https://fonts.googleapis.com/css2?family=Quicksand&amp;display=swap",
      ]}
      scripts={[]}
    />

    <Layout>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>

    <style jsx global>
      {`
        $dark-gray: #050709;

        html,
        body {
          padding: 0;
          margin: 0;

          color: $dark-gray;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .unselectable {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }
      `}
    </style>
  </>
);

export default App;
