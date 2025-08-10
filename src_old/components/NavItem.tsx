import { FC } from "react";
import Link from "next/link";
import Colors from "@/_utils/Colors";

export type NavItemType = {
  image?: string;
  text?: string;
  href: string;
  width?: string | number;
  fontSize?: string | number;
  selected?: boolean;
};

const NavItem: FC<Readonly<NavItemType>> = ({
  text,
  href,
  width,
  fontSize,
  selected,
}: Readonly<NavItemType>) => {
  return (
    <>
      <Link href={href} legacyBehavior>
        <nav
          key={href}
          className={`nav-item ${selected ? "selected" : ""}`}
          aria-label={text}
        >
          <p className="unselectable">{text}</p>
        </nav>
      </Link>

      <style jsx>
        {`
          p {
            font-size: ${fontSize ?? "1.5em"};
            font-family: Quicksand, sans-serif;
            color: ${Colors.text};
          }

          .nav-item {
            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;
            width: ${width ?? "5em"};
            margin-left: 1em;
            background-color: white;

            transition: background-color 0.3s ease;

            &:hover {
              background-color: ${Colors.background};
            }

            &.selected {
              background-color: ${Colors.background};
            }
          }
        `}
      </style>
    </>
  );
};

export default NavItem;
