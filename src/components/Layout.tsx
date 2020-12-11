import React, { FC } from "react";
import NavigationBar from "@/components/NavigationBar";

const Layout: FC<{ children: any }> = ({ children }) => (
  <>
    <div className="layout">
      <NavigationBar />

      {children}
    </div>

    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;

        &:nth-child(2) {
          flex: 1 0;
        }
      }
    `}</style>
  </>
);

export default Layout;
