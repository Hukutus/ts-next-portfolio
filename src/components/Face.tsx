import React, { FC } from "react";
import Image from "next/image";
import Colors from "@/utils/Colors";

export type FaceType = {
  size?: string | number;
  clickable?: boolean;
};

const Face: FC<FaceType> = (props: FaceType) => {
  const { size, clickable } = props;

  return (
    <>
      <div className={`circle${clickable ? " clickable" : ""}`}>
        <Image
          src="/topi_500x500.png"
          alt="The face of Topi Salonen"
          layout="responsive"
          width={250}
          height={250}
        />
      </div>

      <style jsx>
        {`
          .circle {
            width: ${size ?? "250px"};
            height: ${size ?? "250px"};

            border-radius: 50%;
            box-shadow: 0 0 0 0.4em ${Colors.dark};
            overflow: hidden;
          }

          .clickable {
            cursor: pointer;
            transition: box-shadow 0.2s ease;
            margin: 0.75em;
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

export default Face;
