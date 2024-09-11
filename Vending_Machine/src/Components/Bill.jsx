
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import HotelBill from './HotelBill'; // Import your HotelBill component

const Bill = () => {
  const generatePDF = () => {
    const billDiv = document.getElementById('hotel-bill');
    
    html2canvas(billDiv).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 180, 160);
      pdf.save('hotel-invoice.pdf');
      
      // Here you can send the PDF blob to your backend if needed
    });
  };

  return (
    <div>
      <HotelBill />
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default Bill;
