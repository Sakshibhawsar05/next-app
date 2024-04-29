import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { Box, Button } from "@mui/material";
//table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
  name: string,
  Condition: string,
  maxCount: number,
 
) {
  return { name, Condition, maxCount};
}

const rows = [
  createData('jhon', "good", 1),]

const PreviewQuerystep = () => {
  return (
    <Box>
      <Stack sx={{ width: "100%" , px:'4%' ,marginTop:'5%' }} spacing={2}>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning Alert with a cautious title.
        </Alert>
      </Stack>
        <Box><Button variant="outlined" sx={{margin:4}}>Shop Preview</Button></Box>
        
        {/* Table */}
     <TableContainer component={Paper}  sx={{px:4}}  >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell> QueryName</TableCell>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">maxCount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Condition}</TableCell>
              <TableCell align="right">{row.maxCount}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        
    </Box>
  );
};

export default PreviewQuerystep;
