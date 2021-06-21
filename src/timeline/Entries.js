import React, { useEffect, useState } from "react";

import generatePDF from "./generatePDF";
import { Button } from "@material-ui/core";
import { DesktopWindowsSharp } from "@material-ui/icons";

const Entries = (props) => {
  const [tickets, setTickets] = useState([]);

  // useEffect(() => {
  //   const getAllTickets = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/tickets");
  //       setTickets(response.data.tickets);
  //     } catch (err) {
  //       console.log("error");
  //     }
  //   };
  //   getAllTickets();
  // }, []);
  const reportTickets = props.localState.details;

  return (
    <div className=" margin-10">
      <div className="row">
        <Button
          onClick={() =>
            //generatePDF(reportTickets, props.localProps)
            window.print()
          }
          variant="contained"
          color="primary"
          style={{ background: "#fe4546" }}
        >
          {props.title}
        </Button>
      </div>
    </div>
  );
};

export default Entries;
