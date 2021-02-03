import React, { FC } from "react";
import Colors from "@/utils/Colors";

const CVLayout: FC = ({ children }) => (
  <>
    <main>{children}</main>

    <style jsx>{`
      main {
        font-family: Quicksand, sans-serif;
        font-size: 1.5em;

        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 0.2em 0.4em ${Colors.shadow};
        padding: 1em;
        border-radius: 0.5em;

        width: 50em;
        max-width: 90vw;

        margin: 0 auto 5em auto;
      }

      .header-image {
        position: relative;
        width: 100%;
        height: 15em;
      }
    `}</style>
  </>
);

export default CVLayout;
