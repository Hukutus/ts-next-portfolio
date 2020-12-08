import React, { FC } from "react";
import NavItem, { NavItemType } from "@/components/NavItem";

const Navigation: FC = () => {
  const navItems: NavItemType[] = [
    { href: "/CV", text: "CV" },
    // { href: "/Waves", text: "Wavy" },
  ];

  return (
    <>
      <nav className="nav-container">
        {navItems.map((item: NavItemType) => (
          <NavItem href={item.href} text={item.text} key={item.href} />
        ))}
      </nav>

      <style jsx>
        {`
          .nav-container {
            display: flex;
            margin-top: 5em;
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
