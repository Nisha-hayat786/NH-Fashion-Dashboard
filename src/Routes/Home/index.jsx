import React from "react";
import Chart from "../../Components/Chart/Chart";
import FeaturedProducts from "../../Components/FeaturedProducts";
import { data } from "../../Components/Data/ChartData";
import { memberData } from "../../Components/Data/MemberData";
import NewMembers from "../../Components/NewMembers";
import LatestTransactions from "../../Components/LatestTransactions";
import "../Home/home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="mx-5">
        <FeaturedProducts />
      </div>
      <Chart
        data={data}
        title="User Analytics"
        dataKey="ActiveUser"
        name="name"
      />
      <div className="row">
        <div className="col-md-4 ms-5 py-2">
          <div className="chart">
            <h4 className="fs-4 fw-bold px-5 pt-5 mb-0">New Join Members</h4>
            <div className="py-4">
              {memberData.map((val) => {
                return (
                  <NewMembers key={val.id} name={val.name} field={val.field} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-md-7 ms-3 py-2">
          <div className="chart">
            <h4 className="fs-4 fw-bold px-5 pt-5 mb-0">Latest Transactions</h4>
            <div className="px-5 pt-5 d-flex">
              <h6 className="col-md-4 justify-content-start ps-2 d-flex fs-6 fw-bold text-black">Customer</h6>
              <h6 className="col-md-3 justify-content-center d-flex fs-6 fw-bold text-black">Date</h6>
              <h6 className="col-md-2 justify-content-center d-flex fs-6 fw-bold text-black">Amount</h6>
              <h6 className="col-md-3 justify-content-center d-flex fs-6 fw-bold text-black">Status</h6>
            </div>
            <div className="pb-4">
              {memberData.map((val) => {
                return (
                  <LatestTransactions key={val.id} name={val.name} amount={val.amount} type={val.type}/>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
