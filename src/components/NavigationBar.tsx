import { FC, useState } from "react";
import NavItem, { NavItemType } from "@/components/NavItem";
import Colors from "@/utils/Colors";
import useScrollPosition from "@/components/UseScrollPosition";

const NavigationBar: FC = () => {
  const [stickyVisible, setStickyVisible] = useState(false);

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
          <NavItem key={item.href} {...item} size="5em" fontSize="1em" />
        ))}
      </nav>

      <style jsx>
        {`
          .nav-container {
            position: sticky;
            top: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 1em 0;
            z-index: 1;

            transform: translateY(0);
            transition: transform 0.2s ease-in;

            //height: 5.5em;
            //background: ${Colors.dark};
            //box-shadow: 0 0.2em 0.5em ${Colors.shadow};
          }

          .sticky {
            transform: translateY(-100%);
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
