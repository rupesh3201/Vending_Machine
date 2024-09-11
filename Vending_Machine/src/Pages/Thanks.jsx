import { useNavigate } from "react-router-dom";
import "../CSS/Thanks.css";
import Vendingimage from "../assets/VendingMachine/pngwing.com (6).png"

 

function Thanks() {
  const navigate = useNavigate();
  const handleProceed = () => {
    navigate("/menu");
  };

  return (
    <>
      <div className="WelcomePage">
        <div className="content-container">
          <h4>Thanks For Using <span> Peturam</span> Your Order Placed Suceesful..!!</h4>
          <h4>  Please Check Out Below Rack </h4>
          <div >
          <img src={ Vendingimage} className="vendingmachine" />


          </div>
          <button className="ProceedButton" onClick={handleProceed }>
            Revert To Menu Page
          </button>
          
        </div>
      </div>
    </>
  );
}
export default Thanks;