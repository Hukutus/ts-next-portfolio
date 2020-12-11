import React, { FC } from "react";
import NavItem, { NavItemType } from "@/components/NavItem";
import Colors from "@/utils/Colors";

const NavigationBar: FC = () => {
  const navItems: NavItemType[] = [
    { href: "/", text: "Home" },
    { href: "/CV", text: "CV" },
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
            display: flex;
            align-items: center;

            height: 5.5em;
            background: ${Colors.dark};
            box-shadow: 0 0.2em 0 ${Colors.text};
          }
        `}
      </style>
    </>
  );
};

export default NavigationBar;
