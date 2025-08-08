import { forwardRef } from "react";
import Face from "@/components/Face";

type Props = {
  onClick?: () => void;
  href?: string;
  to: string;
};

const BackButton = forwardRef<HTMLAnchorElement, Props>((props, ref) => (
  <>
    <a href={props.href} onClick={props.onClick} ref={ref}>
      {/* Back {props.to ? ` to ${props.to}` : ""} */}
      <Face size="5em" clickable />
    </a>

    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </>
));

export default BackButton;
