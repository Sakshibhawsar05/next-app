"use client"
import { Box } from "@mui/material";
import * as React from 'react';
//import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar ,GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Site Id', width: 150 },
  { field: 'col2', headerName: 'Version', width: 150 },
  { field: 'col3', headerName: 'Full Path', width: 150 },
  { field: 'col4', headerName: 'Trigger Simulation', width: 150 },

];

const simulation = ()  =>{
  return(
        <Box sx={{px:4, py:4 , marginTop:'4%'}}>
           <DataGrid  slots={{ toolbar: GridToolbar }} columns={columns}  rows={[]}  pagination
      autoPageSize
      autoHeight
      pageSizeOptions={[5, 10, 25]}
      />
        </Box>
  )
}

export default simulation;