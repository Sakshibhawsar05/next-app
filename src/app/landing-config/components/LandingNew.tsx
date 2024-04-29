import * as React from 'react';
//import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar ,GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Site Id', width: 150 },
  { field: 'col2', headerName: 'Version', width: 150 },
  { field: 'col3', headerName: 'Full Path', width: 150 },
  { field: 'col4', headerName: 'Trigger Simulation', width: 150 },

];

const LandingNew = () =>{
  return(
    <>
     <div style={{ height: 250, width: '100%' , justifyContent:'space-between'}}>
      <DataGrid  slots={{ toolbar: GridToolbar }} columns={columns}  rows={[]}  pagination
      autoPageSize
      autoHeight
      pageSizeOptions={[5, 10, 25]}
    
      />
    </div>
    </>
  )
}
export default LandingNew;