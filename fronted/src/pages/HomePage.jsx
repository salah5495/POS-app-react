import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <div className="bg-light p-5 mt-4 rounded-3">
        <h1>simple POS for my small cold drink shop</h1>
        <p>
          this is simple yet efficient POS application for my small grocersary
          shop
        </p>
        <p>if you need this POS for your bussiness contact me, +254720555703</p>
        <Link to="/pos" className="btn btn-primary">
          Click here...
        </Link>
      </div>
    </MainLayout>
  );
}

export default HomePage;
