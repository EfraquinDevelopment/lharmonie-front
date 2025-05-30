import jsPDF from "jspdf";

export const downloadAsPdf = async (imageSrc: string, fileName: string) => {
  const doc = new jsPDF();

  const image = new Image();
  image.src = imageSrc;

  image.onload = () => {
    doc.addImage(image, "JPEG", 10, 10, 180, 240);
    doc.save(fileName);
  };
};
