import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import lottie from "../../../lottie/95431-oops-internet-error-train.json";

const ErrorPage = () => {
  return (
    <section className="flex flex-col justify-center h-screen p-16 bg-gray-100 text-gray-900">
      <Lottie className="h-96" animationData={lottie} loop={true} />

      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Sorry, we couldn't find this page.
          </p>
          <Link to="/">
            <button className="btn-primary btn px-8 py-3 font-semibold rounded">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
