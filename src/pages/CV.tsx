import React, { FC } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import BackButton from "@/components/BackButton";

const PdfDynamic = dynamic(() => import("../components/PdfViewer"), {
  ssr: false,
});

const CV: FC = () => (
  <>
    <article className="pdf-container">
      <PdfDynamic url="/cv.pdf" width={1000} pageNumber={1} />
    </article>

    <style jsx>{`
      .pdf-container {
        margin-top: 1em;
        display: flex;
        justify-content: center;
        width: 100%;
      }
    `}</style>
  </>
);

export default CV;
