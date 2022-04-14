import { FC } from "react";
// import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import Colors from "@/utils/Colors";

const Layout: FC<{ children: any }> = ({ children }) => (
  <>
    <div className="layout">
      {/*<div className="bg-wrap">
        <Image
          alt="Succulent"
          src="/pexels-scott-webb-305821.jpg"
          quality={100}
          layout="fill"
          objectFit="cover"
        />
      </div>*/}

      <NavigationBar />

      {children}
    </div>

    <style jsx>{`
      .bg-wrap {
        position: fixed;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        z-index: -1;
      }

      .layout {
        min-height: 100vh;
        background-color: ${Colors.sixty};

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
