import { FC } from "react";
import Face from "@/components/Face";
import Description from "@/markdown/Description.mdx";
import Colors from "@/utils/Colors";

const Home: FC = () => (
  <div className="container">
    <main>
      <Face />

      <div className="info-container">
        <div className="text-container">
          <Description />
        </div>
      </div>
    </main>

    <style jsx>
      {`
        .bg-wrap {
          position: fixed;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          z-index: -1;
        }

        .info-container {
          display: flex;
          flex-direction: column;
          padding: 1em;
          border-radius: 0.2em;
          margin-top: 2em;

          min-height: 15em;
          width: 25em;
          max-width: 90vw;

          font-family: Quicksand, sans-serif;
          font-size: 1em;

          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0.2em 0.4em ${Colors.shadow};
        }

        .info-below-image {
          height: 123px;
        }

        .text-container {
          display: block;
        }

        .wave-box {
          width: 100vw;

          position: absolute;
          bottom: 0;
          z-index: -1;

          display: flex;
        }

        .container {
          flex: 1;
          padding: 0 0.5em;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5em;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
          margin-top: 1em;
        }

        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5em;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75em;
          font-size: 1.1em;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3em;
        }

        .card {
          margin: 1em;
          flex-basis: 45%;
          padding: 1.5em;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1em 0;
          font-size: 1.5em;
        }

        .card p {
          margin: 0;
          font-size: 1.25em;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}
    </style>
  </div>
);

export default Home;
