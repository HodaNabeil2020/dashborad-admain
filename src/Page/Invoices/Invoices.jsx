



import { Box } from '@mui/material';

// @ts-ignore
import { columns, rows } from './Data';

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
const Invoices = () => {
    return (

        <Box sx={{ height: 600, width: "99%", mx: "auto" }}>
            <DataGrid
                checkboxSelection
                slots={{
                    toolbar: GridToolbar,
                }}
                rows={rows}
                // @ts-ignore
                columns={columns}
            />
        </Box>
    );
}

export default Invoices;
