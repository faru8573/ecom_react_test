import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <div className="text-4xl font-bold mb-4 animate-bounce">Oops!</div>
      <div className="text-xl mb-4 animate-pulse">
        We are working on it. This page might not be implemented yet.
      </div>
      <div className="text-lg">
        You will be auto-redirected, please don't refresh or click anything.
      </div>
    </div>
  );
};

export default ErrorPage;
