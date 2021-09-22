import { FC } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

export type PdfViewerProps = {
  url: string;
  width: number;
  pageNumber: number;
};

const PdfViewer: FC<PdfViewerProps> = ({
  url,
  width,
  pageNumber,
}: PdfViewerProps): JSX.Element => (
  <Document file={url}>
    <Page pageNumber={pageNumber} width={width} />
  </Document>
);

export default PdfViewer;
