import React from "react";
import "../FeaturedProducts/featured.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const FeaturedProducts = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 px-3 pt-5 pb-3 mt-2 d-flex justify-content-center">
          <div className="cards">
            <div className="p-5">
              <h5 className="text-black fw-bold fs-5">Revenue</h5>
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="text-black fs-2 fw-bold pt-3">$2,415</h5>
                <p className="text-black fs-6 fw-bold mb-0">-11.4 &nbsp;<ArrowDownwardIcon sx={{color:'red'}}/></p>
              </div>
              <p className="text-black fs-6 fw-bold mb-0 pt-2">
                Compared to last month
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-3 pt-5 pb-3 mt-2 d-flex justify-content-center">
          <div className="cards">
            <div className="p-5">
              <h5 className="text-black fw-bold fs-5">Sales</h5>
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="text-black fs-2 fw-bold pt-3">$2,415</h5>
                <p className="text-black fs-6 fw-bold mb-0">-11.4 &nbsp;<ArrowDownwardIcon sx={{color:'red'}}/></p>
              </div>
              <p className="text-black fs-6 fw-bold mb-0 pt-2">
                Compared to last month
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-3 pt-5 pb-3 mt-2 d-flex justify-content-center">
          <div className="cards">
            <div className="p-5">
              <h5 className="text-black fw-bold fs-5">Costs</h5>
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="text-black fs-2 fw-bold pt-3">$2,415</h5>
                <p className="text-black fs-6 fw-bold mb-0">-11.4 &nbsp;<ArrowUpwardIcon sx={{color:'green'}}/></p>
              </div>
              <p className="text-black fs-6 fw-bold mb-0 pt-2">
                Compared to last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
