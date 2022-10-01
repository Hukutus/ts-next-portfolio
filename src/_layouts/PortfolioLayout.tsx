import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Colors from "@/utils/Colors";

export type PortfolioItemType = {
  title: string;
  description: any;

  image?: string; // URL
  link?: string; // URL
};

/* const Text: FC<{text: string}> = ({text}) => (
  <>
    <div>
      {{text}}
    </div>

    <style jsx>{`
      div {
        font-family: Quicksand, sans-serif;
      }
    `}</style>
  </>
); */

export const Tag: FC<{ text: string }> = ({ text }) => (
  <>
    <div>{text}</div>

    <style jsx>{`
      div {
        background: white;
        box-shadow: 0 0.2em rgba(0, 0, 0, 0.7);
      }
    `}</style>
  </>
);

export const HeaderImage: FC<{
  src: string;
  alt: string;
  text: string;
  styles?: Record<string, any>;
}> = ({ src, alt, text, styles }) => (
  <>
    <nav
      className="header-container"
      style={{ height: "300px", width: "100%", ...styles }}
    >
      {src ? (
        <Image
          alt={alt}
          src={src}
          quality={100}
          layout="fill"
          objectFit="cover"
        />
      ) : (
        <></>
      )}

      <h1>{text}</h1>
    </nav>
    <style jsx>{`
      .header-container {
        position: relative;
        border-radius: 0.25em;
        overflow: hidden;
        box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.3);
      }
      h1 {
        text-shadow: 2px 2px 5px black;
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        padding-bottom: 0.5em;
        padding-left: 0.5em;
        margin: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: flex-end;
        background: rgba(0, 0, 0, 0.4);
        pointer-events: none;
      }
    `}</style>
  </>
);

HeaderImage.defaultProps = {
  styles: [],
};

export const PortfolioCard: FC<{
  src: string;
  alt: string;
  text: string;
  path: string;
}> = ({ src, alt, text, path }) => {
  if (!path) {
    return <></>;
  }

  return (
    <>
      <Link href={path}>
        <a href={path}>
          <HeaderImage
            src={src}
            alt={alt}
            text={text}
            styles={{
              height: "100%",
              width: "100%",
            }}
          />
        </a>
      </Link>

      <style jsx>{`
        a {
          width: calc(50% - 1em);
          height: 10em;
          margin-left: 1em;
          margin-bottom: 1em;
          transition: opacity 0.1s ease-in-out;

          &:hover {
            opacity: 0.9;
          }
        }
        @media only screen and (max-width: 820px) {
          a {
            width: 100%;
            height: 7em;
          }
        }
      `}</style>
    </>
  );
};

export const StyledLink: FC<{ url: string; text: string }> = ({
  url,
  text,
}) => (
  <>
    <div>
      <a href={url}>{text}</a>
      <span>({url})</span>
    </div>

    <style jsx>{`
      div {
        margin-top: 0.5em;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      span {
        margin-left: 0.5em;
        font-size: 0.6em;
      }
    `}</style>
  </>
);

const PortfolioLayout: FC = ({ children }) => (
  <>
    <main>{children}</main>

    <style jsx>{`
      main {
        font-family: Quicksand, sans-serif;
        font-size: 1em;

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

export default PortfolioLayout;
