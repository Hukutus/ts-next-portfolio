import { FC, useState } from "react";
import NavItem, { NavItemType } from "@/components/NavItem";
import Colors from "@/utils/Colors";
import useScrollPosition from "@/components/UseScrollPosition";
import Wave from "@/components/Wave";

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
        <div className="wave-container">
          <Wave
            color={Colors.main}
            waves={6}
            viewBox={{ width: 1500, height: 100 }}
            fixedPoints={{ 0: 100, 2: 50, 3: 50, 6: 100 }}
            height="100%"
            width="100%"
            resetOnHover
          />
        </div>

        {navItems.map((item: NavItemType) => (
          <NavItem key={item.href} {...item} size="4.5em" fontSize="1em" />
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

            height: 5.5em;
          }

          .sticky {
            transform: translateY(-100%);
          }

          /*@media only screen and (max-width: 820px) {
            .nav-container {
              justify-content: space-around;
            }
          }*/

          .wave-container {
            position: absolute;
            display: flex;
            top: 0;
            width: 100%;
            transform: rotate(180deg);
          }
        `}
      </style>
    </>
  );
};

export default NavigationBar;
