import React from "react";

const DashboardTable = ({ data }) => {
  const success = true;
  const info = Object.values(data)[0][0];
  const MONTH_CODES = {
    F: "January",
    G: "February",
    H: "March",
    J: "April",
    K: "May",
    M: "June",
    N: "July",
    Q: "August",
    U: "September",
    V: "October",
    X: "November",
    Z: "December",
  };
  return (
    <div className="box-container">
      <h4 className="box-heading">{info[0].name}</h4>
      <table style={{width:"100%"}}>
        <thead>
          <tr>
            <th style={{width:"50%"}}>Contract</th>
            <th style={{width:"25%"}}>Last</th>
            <th style={{width:"25%"}}>Change</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item, key) => {
            return (
              <tr key={key}>
                <td>{`${MONTH_CODES[item.symbol.slice(-3,-2)]}'${(item.symbol.slice(-2))}`}</td>
                <td>{item.lastPrice}</td>
                <td className={Number(item.netChange)<0 ? "color-danger" : "color-success"}>
                  {`${item.netChange}%`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
