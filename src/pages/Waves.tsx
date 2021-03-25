import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import Wave from "@/components/Wave";

const Waves: FC = () => {
  return (
    <>
      <div className="wave-container">
        <div className="wave-box">
          <Wave
            viewBox={{ width: 1000, height: 300 }}
            height="100%"
            width="100%"
            waves={6}
          />
        </div>
      </div>

      <div className="link-container">
        <Link href="/" passHref>
          <BackButton to="Home" />
        </Link>
      </div>

      <style jsx>{`
        .link-container {
          position: absolute;
          top: 1em;
          left: 1em;
        }

        .wave-container {
          background: #2196f3;
          height: 100vh;
        }

        .wave-box {
          display: flex;
          justify-content: center;

          width: 100vw;

          background: linear-gradient(0deg, white, moccasin);
        }

        .refresh-button {
          position: absolute;

          left: 50%;
          transform: translateX(-50%);
          top: 2em;

          transition: background-color 0.2s ease-in;

          background: transparent;
          color: sandybrown;

          font-weight: bolder;
          font-size: 2em;
          padding: 0.2em;
          border-radius: 0.4em;

          cursor: pointer;
          outline: none;
          border: none;

          &:hover,
          &:active {
            color: rgba(244, 164, 96, 0.8);
          }
        }
      `}</style>
    </>
  );
};
export default Waves;
