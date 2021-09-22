import { FC } from "react";
import Link from "next/link";
import Wave from "@/components/Wave";
import Colors from "@/utils/Colors";

export type NavItemType = {
  image?: string;
  text?: string;
  href: string;
  size?: string | number;
  fontSize?: string | number;
};

const NavItem: FC<Readonly<NavItemType>> = ({
  text,
  href,
  size,
  fontSize,
}: Readonly<NavItemType>) => {
  return (
    <>
      <Link href={href}>
        <nav key={href} className="nav-item">
          <Wave
            color={Colors.main}
            waves={4}
            viewBox={{ width: 100, height: 100 }}
            height={size ?? "5em"}
            width={size ?? "5em"}
          />

          <h1 className="unselectable">{text}</h1>
        </nav>
      </Link>

      <style jsx>
        {`
          h1 {
            position: absolute;
            font-size: ${fontSize ?? "1.5em"};
            font-family: Quicksand, sans-serif;
            color: ${Colors.text};
          }

          .nav-item {
            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;
            height: ${size ?? "5em"};
            width: ${size ?? "5em"};
            margin-left: 1em;
            border-radius: 50%;
            overflow: hidden;
            background: ${Colors.light};

            transition: box-shadow 0.2s ease;
            box-shadow: 0 0 0.2em ${Colors.shadow};

            &:hover {
              box-shadow: 0 0 0.4em ${Colors.shadow};
            }
          }

          @media only screen and (max-width: 820px) {
            .nav-item {
              margin: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default NavItem;
