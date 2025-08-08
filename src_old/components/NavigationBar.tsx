import { FC, useState } from "react";
import { useRouter } from "next/router";
import NavItem, { NavItemType } from "@/components/NavItem";
import useScrollPosition from "@/components/UseScrollPosition";

const NavigationBar: FC = () => {
  const [stickyVisible, setStickyVisible] = useState(false);
  const { pathname } = useRouter();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const showNavigation: boolean = currPos > 0 && currPos > prevPos;

      if (showNavigation !== stickyVisible) {
        // Set visibility if value changed
        setStickyVisible(showNavigation);
      }
    },
    [stickyVisible],
  );

  const navItems: NavItemType[] = [
    { href: "/", text: "Home" },
    { href: "/CV", text: "CV" },
    { href: "/Portfolio", text: "Portfolio" },
    // { href: "/Waves", text: "Wavy" },
  ];

  return (
    <>
      <nav className={`nav-container ${stickyVisible ? "sticky" : ""}`}>
        {navItems.map((item: NavItemType) => (
          <NavItem
            key={item.href}
            {...item}
            selected={item.href === pathname}
            fontSize="1em"
          />
        ))}
      </nav>

      <style jsx>
        {`
          .nav-container {
            position: sticky;
            top: 0;
            margin-bottom: 2em;

            display: flex;
            align-items: center;
            justify-content: center;

            z-index: 1;

            transform: translateY(0);
            -webkit-transform: translateY(0);
            transition: transform 0.2s ease-in;

            background-color: white;
          }

          .sticky {
            transform: translateY(-100%);
            -webkit-transform: translateY(-100%);
          }

          /*@media only screen and (max-width: 820px) {
            .nav-container {
              justify-content: space-around;
            }
          }*/
        `}
      </style>
    </>
  );
};

export default NavigationBar;
