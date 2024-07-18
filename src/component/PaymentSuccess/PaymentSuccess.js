import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert("Your payment and appointment were successful!");
    navigate("/");
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl text-green-500">Processing your appointment...</h1>
    </div>
  );
};

export default PaymentSuccess;
