import React, { FC } from "react";
import Meta from "@/components/Head";

const App: FC<any> = ({ Component, pageProps }) => (
  <>
    <Meta
      title="Topi Salonen"
      description="Portfolio for Topi Salonen - Web developer @ NordicEdu"
      canonical="topisalonen.fi"
      image="/topi_500x500.png"
      styleSheets={[
        "https://fonts.googleapis.com/css2?family=Quicksand&amp;display=swap",
      ]}
      scripts={[]}
    />

    <Component {...pageProps} />

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
