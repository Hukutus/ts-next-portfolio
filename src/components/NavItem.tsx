import React, { FC, useState } from "react";
import Link from "next/link";
import Wave from "@/components/Wave";
import Colors from "@/utils/Colors";

export type NavItemType = {
  image?: string;
  text?: string;
  href: string;
};

const NavItem: FC<Readonly<NavItemType>> = ({
  text,
  href,
}: Readonly<NavItemType>) => {
  const [waveUpdate, setWaveUpdate] = useState(0);

  return (
    <>
      <Link href={href}>
        <nav
          className="nav-item"
          onMouseEnter={() => setWaveUpdate(waveUpdate + 1)}
          onMouseLeave={() => setWaveUpdate(waveUpdate + 1)}
        >
          <Wave
            color={Colors.main}
            waves={4}
            viewBox={{ width: 100, height: 100 }}
            height="5em"
            width="5em"
            update={waveUpdate}
          />

          <h1>{text}</h1>
        </nav>
      </Link>

      <style jsx>
        {`
          h1 {
            position: absolute;
            font-size: 1.5em;
            font-family: Quicksand, sans-serif;
            color: ${Colors.text};
          }

          .nav-item {
            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;
            height: 5em;
            width: 5em;
            margin: 0 1em;
            border-radius: 50%;
            overflow: hidden;
            background: ${Colors.light};

            transition: box-shadow 0.2s ease;
            box-shadow: 0 0 0 0.2em ${Colors.dark};

            &:hover {
              box-shadow: 0 0 0 0.4em ${Colors.dark};
            }
          }
        `}
      </style>
    </>
  );
};

export default NavItem;
