import React, { Fragment } from "react";
import Moment from "react-moment";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  Paper
} from "@material-ui/core";

export default function ToPrint(props) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
  const classes = useStyles();
  var { list } = props;
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Hours</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="center">Completed On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row, index) => (
              <TableRow key={row.index}>
                <TableCell component="th" scope="row">
                  {parseInt(index + 1, 10)}
                </TableCell>
                <TableCell align="center" scope="row">
                  {row.hoursList}
                </TableCell>
                <TableCell align="left" scope="row">
                  {!row.description || row.description === ""
                    ? "No Description"
                    : row.description}
                </TableCell>
                <TableCell align="center">
                  {row.datesAsPerHour ? (
                    <Moment format="dd DD/MM/YYYY HH:mm">
                      {row.datesAsPerHour}
                    </Moment>
                  ) : (
                    "-"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}
