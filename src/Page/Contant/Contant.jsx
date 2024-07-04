

import { Box } from '@mui/material';

import { columns, rows } from './data';

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Contant = () => {
    return (

        <Box sx={{ height: 600, width: "99%", mx: "auto" }}>
            <DataGrid
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

export default Contant;
