import React, { FC } from "react";
import NavItem, { NavItemType } from "@/components/NavItem";
import Colors from "@/utils/Colors";

const NavigationBar: FC = () => {
  const navItems: NavItemType[] = [
    { href: "/", text: "Home" },
    { href: "/CV", text: "CV" },
    { href: "/Portfolio", text: "Portfolio" },
    // { href: "/Waves", text: "Wavy" },
  ];

  return (
    <>
      <nav className="nav-container">
        {navItems.map((item: NavItemType) => (
          <NavItem key={item.href} {...item} size="4em" fontSize="1em" />
        ))}
      </nav>

      <style jsx>
        {`
          .nav-container {
            position: sticky;
            top: 0;

            display: flex;
            align-items: center;

            padding-top: 1em;

            //height: 5.5em;
            //background: ${Colors.dark};
            //box-shadow: 0 0.2em 0.5em ${Colors.shadow};
          }

          @media only screen and (max-width: 500px) {
            .nav-container {
              justify-content: space-around;
            }
          }
        `}
      </style>
    </>
  );
};

export default NavigationBar;
