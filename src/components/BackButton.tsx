import React from "react";

type Props = {
  onClick?: () => void;
  href?: string;
  to: string;
};

const BackButton = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => (
  <>
    <a href={props.href} onClick={props.onClick} ref={ref}>
      Back {props.to ? ` to ${props.to}` : ""}
    </a>

    <style jsx>{`
      a {
        text-decoration: none;
        color: #050709;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

        &:before {
          content: "🠔 ";
        }
      }
    `}</style>
  </>
));

export default BackButton;
