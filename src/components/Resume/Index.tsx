import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";

import CV from "../../assets/pdf/Mohamed-Resume.pdf";

import "./resume.css";
const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className='resume'>
      <Document file={CV} onLoadError={console.error}>
        <Page pageNumber={1} className='resume' renderTextLayer={false} />
      </Document>
    </div>
  );
};

export default Resume;
