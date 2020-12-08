import React, { FC } from "react";

const Title: FC<Readonly<{ text: string }>> = ({
  text,
}: Readonly<{ text: string }>) => (
  <>
    <h1 className="title">{text}</h1>

    <style jsx>
      {`
        .title {
          letter-spacing: 0.5em;
          padding-left: 0.5em;

          line-height: 1.15;
          font-size: 4rem;
          font-family: Quicksand, sans-serif;
        }

        @media only screen and (max-width: 820px) {
          .title {
            text-align: center;
          }
        }

        @media only screen and (max-width: 500px) {
          .title {
            letter-spacing: unset;
            padding-left: 0;
          }
        }
      `}
    </style>
  </>
);

export default Title;
