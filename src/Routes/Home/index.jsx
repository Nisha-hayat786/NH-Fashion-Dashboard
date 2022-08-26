import React, { useEffect, useMemo, useState } from "react";
import Chart from "../../Components/Chart/Chart";
import FeaturedProducts from "../../Components/FeaturedProducts";
import NewMembers from "../../Components/NewMembers";
import LatestTransactions from "../../Components/LatestTransactions";
import { userRequest } from "../../Redux/requestMethods";
import "../Home/home.css";

const Home = () => {

  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats)
  return (
    <div className="container">
      <div className="mx-5">
        <FeaturedProducts />
      </div>
      <Chart
        data={userStats}
        title="User Analytics"
        dataKey="Active User"
        name="name"
        grid
      />
      <div className="row">
        <div className="col-md-4 ms-5 py-2">
          <div className="chart">
            <h4 className="fs-4 fw-bold px-5 pt-5 mb-0">New Join Members</h4>
            <div className="py-4">
              <NewMembers />
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
              <LatestTransactions/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
