import { useEffect, useState } from "react";
import { namesFilter } from "../utils/constants";
import { Container } from "@mui/material";

const TableComponent = () => {
  const name = JSON.parse(localStorage.getItem("name") || []);

  console.log("name", name);

  return (
    <div>
      <table id="tableComp" style={{}}>
        <thead>
          <tr
            style={{
              backgroundColor: "gray",
              height: "35px",
            }}
          >
            <th scope="col">Names</th>
            <th scope="col">Repetations</th>
          </tr>
        </thead>
        <tbody>
          {name?.map((ele, idx) => {
            let mycolor = "white";
            if (ele[1] > 0 && ele[1] < 3) {
              mycolor = "red";
            } else if (ele[1] > 2 && ele[1] < 10) {
              mycolor = "yellow";
            } else {
              mycolor = "green";
            }
            return (
              <tr key={idx}>
                <th scope="row"> {ele[0]} </th>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                    backgroundColor: mycolor,
                  }}
                >
                  {" "}
                  {String(ele[1])}
                </td>
              </tr>
            );
          }
          
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
