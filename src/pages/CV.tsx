import React, { FC } from "react";
import dynamic from "next/dynamic";

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
        margin: 1em 0 5em;
        display: flex;
        justify-content: center;

        width: 100%;
      }
    `}</style>
  </>
);

export default CV;
